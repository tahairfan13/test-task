import React from "react";
import { useRouter } from "next/router";
import { useGetData } from "../../Hooks/useGetData";
import Box from "@mui/material/Box";

export default function id() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useGetData(`/items/${id}`);
  return (
    <div>
      {data ? null : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          Loading...
        </Box>
      )}
      {data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <h2>Title : {data.title}</h2>
          <h2>Points : {data.points}</h2>
          <h2>
            Children :{" "}
            {data.children.map((child: any) => (
              // eslint-disable-next-line react/jsx-key
              <p dangerouslySetInnerHTML={{ __html: child.text }} />
            ))}
          </h2>
        </Box>
      )}
    </div>
  );
}
