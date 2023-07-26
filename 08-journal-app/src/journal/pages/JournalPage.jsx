// import { Typography } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
// import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views"
import { IconButton } from "@mui/material"

export const JournalPage = () => {
  return (
    <JournalLayout>
        {/* <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis harum consequatur eius tenetur repudiandae at qui deleniti accusantium numquam asperiores possimus, architecto voluptatum, quod commodi consequuntur! Reprehenderit, nemo nam!
        </Typography> */}

        <NothingSelectedView/>
        {/* Nada seleccionado */}

        {/* <NoteView/> */}
        {/* Note view */}

        <IconButton
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>


    </JournalLayout>
  )
}
