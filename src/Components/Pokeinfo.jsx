import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const Pokeinfo = ({ data }) => { 
    const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(!open);
  const style = {
    position: 'absolute'  ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 
  
    return (
        <>
        {
            (!data && open) ? "" : (
                <>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                  <h1>{data.name}</h1>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                  </Typography>
                </Box>
              </Modal>
              </>

 
            )
        }

        </>
    )
}
export default Pokeinfo