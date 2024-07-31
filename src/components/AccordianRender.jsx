import React from 'react';
import Accordian from './accordian/Accordian';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';

const AccordianRender = () => {
    const subjects = ["english", "hindi", "arabic"];
    const levelsAccordian = ["level 1", "level 2"];
    const lists = ["1", "2", "3"]


    return (
        <div>
            {subjects.map((data) => (
                <Accordian key={data} title={data} expandIcon={<ArrowDownwardIcon />}>
                    {levelsAccordian.map((data) => (
                        <Accordian key={data} title={data} expandIcon={<ArrowDownwardIcon />} >
                            {lists.map((list)=>(
                                <Typography key={list}>{list}</Typography>
                            ))}
                        </Accordian>
                    ))}

                </Accordian>
            ))}

        </div>
    );
};

export default AccordianRender;

