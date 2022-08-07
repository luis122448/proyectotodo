import React from "react";
import { TodoContext } from "./TodoContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.css';

function TodoForm() {
    const icons = {
        "high": <i className="fa-duotone fa-fire"></i>,
        "medium": <i className="fa-duotone fa-thumbs-up"></i>,
        "low": <i className="fa-solid fa-temperature-empty"></i>
    };

    const icons_curso = {
        "buscar": <i className="fa-duotone fa-magnifying-glass"></i>,
        "html5": <i className="fa-brands fa-html5"></i>,
        "css": <i className="fa-brands fa-css3"></i>,
        "react": <i className="fa-brands fa-react"></i>,
        "angular": <i className="fa-brands fa-angular"></i>
    };

    const [startdate, setNewTodoValue_fecha] = React.useState("2022-08-6");

    const [startDate_fecha, setStartDate] = React.useState(new Date());

    const [newTodoValue, setNewTodoValue] = React.useState("");
    const [newTodoValueDes, setNewTodoValueDes] = React.useState("");

    const [newPriority, setNewPriority] = React.useState("high");
    const [currentIcon, setCurrentIcon] = React.useState(icons["high"]);

    const [currentIcon_curso, setCurrentIcon_curso] = React.useState(icons["buscar"]);
    const [newPriority_curso, setNewPriority_curso] = React.useState("buscar");

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChangeText = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onChangeTextDes = (event) => {
        setNewTodoValueDes(event.target.value);
    };

    const onChangeText_fecha = (event) => {
        setNewTodoValue_fecha(event.target.value);
    };

    const onChangeSelect = (event) => {
        setNewPriority(event.target.value);
        setCurrentIcon(icons[event.target.value]);
        console.log('updating icon...');
    };

    const onChangeSelect_Curso = (event) => {
        setNewPriority_curso(event.target.value);
        setCurrentIcon_curso(icons_curso[event.target.value]);
        console.log('updating icon...');
    };

    // const setStartDate = (date) =>{
    //     console.log('updating icon...');
    // };

    const etNewTodoValue_fecha = (date) =>{
        console.log('updating icon...');
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onAdd = (event) => {
        event.preventDefault();
        if (newTodoValue !== "") {
            addTodo(newTodoValue, newPriority);
            // addTodo(startDate_fecha, setStartDate);
            setOpenModal(false);
        }
    };
    return (
        <div className="modal__blur">
            <form className="modal__form" onSubmit={onAdd}>
                <h2 className="form__title">Neuvo Proyecto</h2>
                
                <div className={"form__select-container " + newPriority} id="selectContainer">
                    <label htmlFor="select" className="select__label">Priority</label>
                    <div className={"select__icon " + newPriority} id="iconPriority">
                        {currentIcon}
                    </div>
                    <select onChange={onChangeSelect} id="select" className="select__select">
                        <option value="high" defaultValue={"selected"}>Urgente</option>
                        <option value="medium">Prioridad</option>
                        <option value="low">Segundo Plano</option>
                    </select>
                </div>

                <p class="form__text__label pt-5 pb-0">Defina el nombre del Proyecto : </p>

                <textarea className="form__text" value={newTodoValue} onChange={onChangeText} placeholder="Nombre ... "></textarea>

                <p class="form__text__label pt-5 pb-0">Defina una descripción del Proyecto : </p>

                <textarea className="form__text" value={newTodoValueDes} onChange={onChangeTextDes} placeholder="Descripción ... "></textarea>

                <div className={"form__select-container__curso " + newPriority_curso} id="selectContainer">
                    <label htmlFor="select" className="select__label">Asigantura</label>
                    <div className={"select__icon " + newPriority_curso} id="iconPriority">
                        {currentIcon_curso}
                    </div>
                    <select onChange={onChangeSelect_Curso} id="select" className="select__select">
                        <option value="buscar" defaultValue={"selected"}>Seleccionar un Curso</option>
                        <option value="html5">Diseño de Sitios Web con HTML5</option>
                        <option value="css">Maquetación con CSS</option>
                        <option value="react">Introduccion a React.js</option>
                        <option value="react">Render y Composición con React.js</option>
                        <option value="react">Librerias con React.js</option>
                        <option value="angular">Fundamentos de Angular</option>
                        <option value="angular">Componentes y Servicios con Angular</option>
                        <option value="angular">Consumo de ApiRest con Angular</option>
                    </select>
                </div>

                {/* <textarea className="form__fecha" value={newTodoValue_fecha} onChange={onChangeText_fecha} placeholder="Fecha Entrega"></textarea> */}
                
                <p class="form__text__label pt-5 pb-0">Selecione Fecha de Entrega : </p>
                
                <DatePicker  className="form__fecha" class="border border-secondary" selected={startDate_fecha} locale="es" onChange={(date) => setStartDate(date)} />
                
                <div className="form__buttons">
                    <button
                        className="buttons__cancel"
                        onClick={onCancel}
                        type="button"
                    >
                        Cancel
                    </button>

                    <button
                        className="buttons__submit"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export { TodoForm };