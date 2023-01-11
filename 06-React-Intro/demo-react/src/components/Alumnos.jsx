const Alumnos = (props) => {
    console.log(props);

    const { pepitos, hola } = props;

    // console.log(alumnos);

    return(
        <>
            {
                pepitos.map((alumno) => {
                    return (
                        <>
                            <h4>{hola}</h4>
                            <p>{alumno.name}</p>
                            <span>{alumno.age}</span>
                        </>
                    )
                })
            }
        </>
    )
}


export default Alumnos;