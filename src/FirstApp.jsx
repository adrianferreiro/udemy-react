import PropTypes from 'prop-types';

// function sumar(uno,dos){
//     return uno + dos;
// }

// export const FirstApp = (props) => {
 export const FirstApp = ({title, subtitle}) => {


    return (
    //<> fragmento que permite agrupar por ej el h1 con el p o más etiquetas
    <>
        {/* <h1> { sumar(8,7) } </h1> */}
        {/* <h1> {props.title} </h1> */}
        <h1> {title} </h1>
        

        <p>{subtitle}</p>
    </>
  )
}
 
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subtitle: 'No hay subtítulo'
}