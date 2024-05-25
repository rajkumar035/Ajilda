import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Accordion, AccordionSummary, AccordionDetails, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
import Footer from '../../components/Footer';
import faq1 from "../../asset/PNG's/faq1.png";
import faq2 from "../../asset/PNG's/faq2.png";

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    borderRadius: '50%',
    background: '#000000',
    color: '#ffffff',
  },
  addIcon: {
    borderRadius: '50%',
    background: '#e8e8e8',
  },
  accordionpredef: {
    border: 'none',
    boxShadow: 'none',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    width: '100%',
    textAlign: 'center',
  },
  number: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTopLeft: {
    position: 'absolute',
    top: -30,
    left: -150,
    width: '350px',
  },
  imageBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: -130,
    width: '350px',
  },
}));

const Faq = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionData = [
    {
      id: 'panel1',
      title: 'Where can I watch?',
      content: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla.',
    },
    {
      id: 'panel2',
      title: 'Where can I watch?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      id: 'panel3',
      title: 'Where can I watch?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      id: 'panel4',
      title: 'Where can I watch?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
  ];

  return (
    <>
      <div className={classes.container}>
        <img src={faq1} alt='FAQ Top Left' className={classes.imageTopLeft} />
        <img src={faq2} alt='FAQ Bottom Right' className={classes.imageBottomRight} />
        <Grid container style={{ margin: '30px 0px' }}>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <div className={classes.container}>
              <h1>Frequently Asked Questions</h1>
              <h4 className={classes.content}>We know what our customers ask us many times. By searching this part, you can find almost all solutions you need to solve.</h4>
            </div>
            <Divider style={{ margin: '30px 0px' }} />
            <Grid container>
              {accordionData.map((accordion, index) => (
                <React.Fragment key={accordion.id}>
                  <Grid item md={1} className={classes.number}>
                    <h4 style={{ fontSize: '28px', color: '#8C8C8C', marginTop: '30px' }}>{String(index + 1).padStart(2, '0')}</h4>
                  </Grid>
                  <Grid item md={11}>
                    <Accordion
                      expanded={expanded === accordion.id}
                      onChange={handleChange(accordion.id)}
                      sx={{
                        border: 'none',
                        boxShadow: 'none',
                      }}>
                      <AccordionSummary expandIcon={<IconButton>{expanded === accordion.id ? <CloseIcon className={classes.closeIcon} /> : <AddIcon className={classes.addIcon} />}</IconButton>} aria-controls={`${accordion.id}-content`} id={`${accordion.id}-header`}>
                        <h4>{accordion.title}</h4>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography style={{ color: '#6B6B6B' }}>{accordion.content}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
