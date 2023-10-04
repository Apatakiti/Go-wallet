import React, { useState } from 'react';
import { useTheme, Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

  const HelpSupport = () => {

    const faqData = [
    {
      question: 'How do I create a new wallet?',
      answer: 'To create a new wallet, go to the Wallet section and click on the "Create Wallet" button.',
    },
    {
      question: 'How can I secure my wallet?',
      answer: 'You can secure your wallet by setting a strong password, enabling two-factor authentication, and storing your private keys in a safe place.',
    },
    {
      question: 'What should I do if I forget my wallet password?',
      answer: 'If you forget your wallet password, you may need to reset your password by following the "Forgot Password" link on the login page.',
    },
  ];

  return (
    <Box marginLeft={'10px'}>
      <h1>Wallet FAQ</h1>
      {faqData.map((item, index) => (
        <Accordion key={index} >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h3' color={'secondary'} >{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails><Typography >{item.answer}</Typography></AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default HelpSupport;