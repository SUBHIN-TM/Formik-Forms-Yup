import React from 'react';
import Accordian from './accordian/Accordian';
import Typography from '@mui/material/Typography';

const AccordianRender = () => {
    const subjects = ["english", "hindi", "arabic"];
    const levelsAccordian = ["level 1", "level 2"];
    const lists = ["1", "2", "3"]


    return (
        <div>
            {subjects.map((data) => (
                <Accordian key={data} title={data} >
                    {levelsAccordian.map((data) => (
                        <Accordian key={data} title={data}  >
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

