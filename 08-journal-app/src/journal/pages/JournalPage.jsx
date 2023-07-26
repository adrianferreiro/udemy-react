// import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
// import { NothingSelectedView, NoteView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
        {/* <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis harum consequatur eius tenetur repudiandae at qui deleniti accusantium numquam asperiores possimus, architecto voluptatum, quod commodi consequuntur! Reprehenderit, nemo nam!
        </Typography> */}

        {/* <NothingSelectedView/> */}
        {/* Nada seleccionado */}

        <NoteView/>
        {/* Note view */}


    </JournalLayout>
  )
}
