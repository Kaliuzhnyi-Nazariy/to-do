import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { useEffect } from "react";
import { getTodo } from "@/app/redux/todo/operations";
import { IToDoReceived, updateTodo } from "@/app/redux/todo/typesOrInterfaces";
import ItemOfAccordion from "./ItemOfAccordion";

const ItemOfLists = ({
  title,
  tasks,
  setData,
  handleOpenModal,
  handleOpenCreateModal,
}: {
  title: string;
  tasks: IToDoReceived[];
  setData: (data: updateTodo) => void;
  handleOpenModal: () => void;
  handleOpenCreateModal: () => void;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  const bgc = { header: "#1d7cbb", main: "#5cace1", btncolor: "#cfe5f3" };

  switch (title) {
    case "to-do":
      bgc.header = "#1d7cbb";
      bgc.main = "#5cace1";
      bgc.btncolor = "#cfe5f3";
      break;

    case "progress":
      bgc.header = "#d9bb41";
      bgc.main = "#f7dc6f";
      bgc.btncolor = "#e0d39f";
      break;

    case "done":
      bgc.header = "#45c97d";
      bgc.main = "#72de9f";
      break;

    default:
      bgc.main = "green";
      bgc.header = "green";
      bgc.btncolor = "green";
  }

  return (
    <li>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            backgroundColor: bgc.header,
            color: "white",
            fontFamily: "Jaro, sans-serif",

            width: "300px",

            display: "flex",

            "&.MuiAccordionSummary-gutters": {
              minHeight: "unset",
              margin: 0,
              fontFamily: "Jaro, sans-serif",

              width: "300px",
            },
            "& .MuiAccordionSummary-content.Mui-expanded": {
              margin: 0,
              height: "40px",
              display: "flex",
              alignItems: "center",
              fontFamily: "Jaro, sans-serif",

              width: "300px",
            },
            "& .MuiAccordionSummary-content": {
              fontFamily: "Jaro, sans-serif",

              margin: 0,
              height: "40px",
              display: "flex",
              alignItems: "center",

              width: "300px",
            },
          }}
        >
          <Typography
            component="span"
            className="uppercase"
            sx={{
              fontFamily: "Jaro, sans-serif",
              fontSize: "20px",
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          className="w-[300px] px-0 h-[200px]"
          sx={{
            padding: "10px",
            overflowY: "scroll",
            bgcolor: bgc.main,
          }}
        >
          <ul className="flex flex-col gap-[15px] text-white">
            {tasks.length != 0 ? (
              tasks.map((task) => {
                return (
                  <ItemOfAccordion
                    liColor={bgc.header}
                    btnColor={bgc.btncolor}
                    key={task._id}
                    task={task}
                    handleOpenModal={handleOpenModal}
                    setData={setData}
                  />
                );
              })
            ) : (
              <li>
                <div className="">No tasks</div>
              </li>
            )}

            {title === "to-do" ? (
              <li
                className="border-[1px] border-dashed border-[var(--darkertodobg)] w-[280px] h-[40px] rounded-[25px] flex flex-row justify-center items-center text-center "
                onClick={() => {
                  handleOpenCreateModal();
                }}
              >
                + Add to-do
              </li>
            ) : (
              <></>
            )}
          </ul>
        </AccordionDetails>
      </Accordion>
    </li>
  );
};

export default ItemOfLists;
