import React, {memo} from "react";
import "./style.scss"
import TaskWithVariants from "@components/TaskTypes/TaskWithVariants/TaskWithVariants";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Button, Pagination} from "@mui/material";

// interface ITaskProps {
//     title: string,
//     description: string,
//     variant_1?: string,
//     variant_2?: string,
//     variant_3?: string,
//     variant_4?: string,
//     answer?: string
// }
//Скрыт пока не подвязан бэк

function Task() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="task">

      <div className="task__header">
        <div className="task__header-top">
          <h2 className="task__title">Test</h2>
          <div className="task__end" onClick={handleClickOpen}>Завершить тест</div>
        </div>
        <div className="task__subtitle">Test</div>
      </div>

      <div className="task__answer">
        <TaskWithVariants/>
      </div>

      <Pagination className="task__pagination" count={10} color="primary" />

      {/*Модальное окно из компонентов Mui*/}
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Подтвердите завершение"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Вы уверены, что хотите завершить тестирование и отправить результаты?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
          <Button onClick={handleClose}>Отправить</Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default memo(Task);
