import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ['Id', 'Name', 'Rollno', 'Standard', 'Standard_name', 'Course'];
const TABLE_ROWS = [
  {
    "id": 1,
    "standard_name": "A",
    "name": "Aakarshak Shotri",
    "rollno": 21,
    "standard": "12th",
    "course": "Science"
  },
  {
    "id": 2,
    "standard_name": "B",
    "name": "Vinit",
    "rollno": 22,
    "standard": "11th",
    "course": "Mathematics"
  },
  {
    "id": 3,
    "standard_name": "B",
    "name": "Yash",
    "rollno": 23,
    "standard": "12th",
    "course": "History"
  },
  {
    "id": 4,
    "standard_name": "C",
    "name": "Fidyan",
    "rollno": 24,
    "standard": "10th",
    "course": "Science"
  },
  {
    "id": 5,
    "standard_name": "A",
    "name": "Fenil",
    "rollno": 25,
    "standard": "11th",
    "course": "Mathematics"
  },
  {
    "id": 6,
    "standard_name": "B",
    "name": "Dwij",
    "rollno": 26,
    "standard": "12th",
    "course": "History"
  },
  {
    "id": 7,
    "standard_name": "A",
    "name": "Gopi",
    "rollno": 27,
    "standard": "10th",
    "course": "Science"
  },
  {
    "id": 8,
    "standard_name": "C",
    "name": "Dev",
    "rollno": 28,
    "standard": "11th",
    "course": "Mathematics"
  },
  {
    "id": 9,
    "standard_name": "A",
    "name": "Dhruv",
    "rollno": 29,
    "standard": "12th",
    "course": "History"
  },
  {
    "id": 11,
    "standard_name": "B",
    "name": "Sample",
    "rollno": 31,
    "standard": "11th",
    "course": "Mathematics"
  },
  {
    "id": 12,
    "standard_name": "A",
    "name": "Aakarshak Shotri",
    "rollno": 32,
    "standard": "12th",
    "course": "Science"
  },
  {
    "id": 16,
    "standard_name": null,
    "name": "V",
    "rollno": 42,
    "standard": "11th",
    "course": "Mathematics"
  },
  {
    "id": 17,
    "standard_name": null,
    "name": "A",
    "rollno": 32,
    "standard": "12th",
    "course": "Science"
  },
  {
    "id": 18,
    "standard_name": null,
    "name": "Aakarshak Shotri",
    "rollno": 21,
    "standard": "12th",
    "course": "Science"
  },
  {
    "id": 19,
    "standard_name": null,
    "name": "Aakarshak Shotri",
    "rollno": 21,
    "standard": "12th",
    "course": "Science"
  }
]
function table(props) {
  return (
    <Card className="h-full w-full">
      <table className="">
        <thead>
          <tr className=''>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 py-10 p-10"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.students.slice(props.start, props.end).map(({ id, name, standard, standard_name, course, rollno }, index) => {
            const classes = "py-4 w-32 relative left-[60px] ";
            return (
              <tr key={id} className=''>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={`${classes} absolute left-[40px]`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {rollno}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {standard}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {standard_name ? standard_name : "-"}
                  </Typography>

                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {course}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </Card>
  );
}

export default table;
