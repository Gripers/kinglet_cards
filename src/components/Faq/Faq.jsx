import styles from './Faq.module.scss';

import { Accordion, AccordionTab } from 'primereact/accordion';

import questions_array from './arr';

const Faq = () => {
  return (
    <div className={styles.faq__wrapper}>
      <h3>BEAWARE OF FRAUND AND SCAMS!</h3>
      <h1>Frequently Asked Questions</h1>
      <Accordion className={styles.faq__questions}>
        {questions_array.map((item) => (
          <AccordionTab
            key={item.id}
            header={item.question}
            className={styles.faq__questions_question}
          >
            {item.answer}
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
