import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useGetData } from "../Hooks/useGetData";
import Link from "next/link";

export default function Home() {
  const [params, setParams] = React.useState("/search?query=");
  const { data, error } = useGetData(params);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <h1>Hacker News Test Task</h1>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "90ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setParams(`/search?query=${e.target.value}`)}
          id="standard-basic"
          label="Search"
          variant="standard"
        />
      </Box>

      <Box>
        <h2>Results</h2>
        {error && <p>{error}</p>}
        {data ? null : <p>Loading...</p>}
        {data &&
          data.hits?.map((item: any) => (
            <Box
              sx={{
                cursor: "pointer",
              }}
              key={item.objectID}
            >
              <Link href={`/items/${item.objectID}`}>
                <h3>{item.title}</h3>
              </Link>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
