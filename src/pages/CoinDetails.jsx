import React from "react";
import Box from "@mui/material/Box";
import "./custom.css";
import ApiTable from "../components/ApiTable";
import { useParams } from "react-router-dom";

// defining column name and field name acc to MUI DataGrid
const columns = [
  {
    field: "name",
    headerName: "Name",
  },
  {
    field: "image",
    headerName: "Image",
    renderCell: (params) => (
      <img
        src={params.row.image.thumb}
        alt={params.row.image.thumb}
        height="50"
        width="50"
      />
    ),
  },
  {
    field: "symbol",
    headerName: "Symbol",
  },
  {
    field: "hashing_algorithm",
    headerName: "Hashing Algorithm",
  },
  {
    field: "description",
    headerName: "Description",
    renderCell: (params) => (
      <div dangerouslySetInnerHTML={{ __html: params.row.description.en }} />
    ),
    width: 500,
  },
  {
    field: "market_cap",
    headerName: "Market Cap (EUR)",
    valueGetter: (params) => params.row.market_data.market_cap.eur,
    width: 200,
  },
  {
    field: "homepage",
    headerName: "HomePage",
    width: 400,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          whiteSpace: "normal",
          overflowWrap: "anywhere",
        }}
      >
        {params.row.links.homepage
          // filter out the non - empty links from the array
          .filter((link) => link !== "")
          // map the rest array to display data in the table
          .map((link, i) => {
            return (
              <span key={i}>
                <a style={{ fontWeight: "bold" }} href={link}>
                  {link}
                </a>
              </span>
            );
          })}
      </div>
    ),
  },
  {
    field: "genesis_date",
    headerName: "Genesis Date",
  },
];

const CoinDetails = () => {
  const params = useParams();

  return (
    <Box className="coinDetails">
      <ApiTable
        columns={columns}
        page={1}
        perPage={100}
        RowHeight="auto"
        density="compact"
        styleClass={{
          whiteSpace: "normal",
          wordWrap: "break-word",
          width: "80%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        isCoinDetail={true}
        params={params}
      />
    </Box>
  );
};
export default CoinDetails;
