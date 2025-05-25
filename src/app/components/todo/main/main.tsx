"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MainPage() {
  interface ITodoMock {
    _id: string;
    title: string;
    description?: string;
    status: string;
  }

  const todoMock: ITodoMock[] = [
    {
      title: "task 1",
      _id: "1",
      description: "to do something",
      status: "todo",
    },
    { title: "task 2", _id: "2", status: "todo" },
    { title: "task 3", _id: "3", status: "progress" },
  ];

  const todoList = todoMock.filter((todo) => todo.status === "todo");

  return (
    <ul className="flex flex-col gap-[15px] mt-[15px] items-center">
      <li>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{
              backgroundColor: "#1d7cbb;",
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
              // minHeight: "unset", // remove enforced height              maxHeight: "40px",
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
              todo
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            className="bg-[var(--todobgc)] w-[300px] px-0 h-[200px]"
            sx={{
              padding: "10px",
            }}
          >
            <ul className="flex flex-col gap-[15px] text-white">
              {todoList.length != 0 ? (
                todoList.map((task) => {
                  return (
                    <li
                      key={task._id}
                      className="bg-[var(--darkertodobg)] pl-5 w-[280px] h-[40px] rounded-[25px] flex flex-row justify-between"
                      onClick={() => {
                        console.log(task);
                      }}
                    >
                      <div className="">
                        <h2 className="text-[16px]">{task.title}</h2>
                        <p className="text-[12px]">{task.description || ""}</p>
                      </div>
                      <button
                        className="w-[50px] h-[40px] bg-[var(--todobtn)] rounded-tr-[25px] rounded-br-[25px]"
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                          e.stopPropagation();
                          console.log(task._id);
                        }}
                      >
                        ✓
                      </button>
                    </li>
                  );
                })
              ) : (
                <li>
                  <div className="">No tasks</div>
                </li>
              )}

              <li
                className="border-[1px] border-dashed border-[var(--darkertodobg)] w-[280px] h-[40px] rounded-[25px] flex flex-row justify-center items-center text-center "
                onClick={() => console.log("add")}
              >
                + Add to-do
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </li>
      <li></li>
      <li></li>
    </ul>
  );
}
