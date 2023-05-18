export default function Reservas(props) {
    console.log(props);
    const { name, price } = props.reserva.package
    const { email } = props.reserva.user
    return (
        <div>
            <p>Nombre: {name}</p>
            <p>Email: {email}</p>
            <p>Precio: ${price}</p>
            <hr/>
        </div>
    )
}