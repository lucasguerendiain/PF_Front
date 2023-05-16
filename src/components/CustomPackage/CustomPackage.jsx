import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import {
  borrarActivitie,
  borrarHotel,
  estadoInicialCarrito,
} from '../../redux/actions/carritoActions';
import { setButtonToCart } from '../../redux/actions/formActions';
import './CustomPackage.css';
import { addReserva } from '../../redux/actions/reservaActions';
import Calendar from '../Calendar/Calendar';
import BasicModal from '../CreatePackage/Modals/BasicModal';
import axios from "axios";

function CustomPackage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const carrito = useSelector((state) => state.carrito);
  const { activities, hotel } = carrito;
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.users.user);

  const handleApprove = async () => {
    dispatch(addReserva());
    dispatch(estadoInicialCarrito());
  };

  const handleDelete = async (name) => {
    dispatch(borrarActivitie(name));
  };

  const handleDeleteHotel = () => {
    dispatch(borrarHotel());
  };

  const handleClick = (data) => {
    setDate(data);
    setOpen(false);
  };

  const handleNav = (name) => {
    dispatch(setButtonToCart());
    switch (name) {
      case 'ACTIVIDAD':
        navigate('/activitycards');
        break;
      case 'HOTEL':
        navigate('/hotelcards');
        break;
      default:
        alert('Algo salió mal.');
    }
  };

  const calcularValue = (actividades, hotel) => {
    const precioActi = actividades.reduce((acumulator, currentValue) => acumulator + currentValue.price, 0);
    const precioHotel = (hotel.priceDay * Math.ceil(activities.length / 2));
    return precioActi + precioHotel;
  }

  const handleSubmit = async () => {
    const duracion = Math.ceil(activities.length / 2);
    const activitiesId = activities.map((elem) => {return elem.id});
    const pack = {
      name: "custom package",
      location: "custom",
      price: calcularValue(activities, hotel),
      duration: duracion,
      img : [],
      description: "custom",
      quotas: 2,
      dateInit: date || new Date ("12/3/2023"),
      dateEnd: new Date("12/5/2023"),
      activitiesId: activitiesId,
      hotelId: hotel.id,
      restaurantId: "",
      userId: user.id
    }
    const response = await axios.post("/package", pack);
    const datosAMandar = {
      paid: true,
      numOfTravels: 1,
      userId: user.id,
      packageId: response.data.id,
    }
    await axios.post("/reservation", datosAMandar);
    dispatch(estadoInicialCarrito());
  }

  return (
    <div className='custom-package-container'>
      <h2>Personaliza tu paquete</h2>
      <div className='package-summary'>
        <h3>Resumen del paquete</h3>
        <p>Fecha: {date.toLocaleString().split(',')[0]}</p>
        <button onClick={() => setOpen(true)}>elegir fecha</button>
        <BasicModal
          open={open}
          handleClose={() => setOpen(false)}
          title='elegite la fecha'
          content={<Calendar handleClick={handleClick} />}
          handleSubmit={false}
        />
        <br />
        <button onClick={handleApprove}>Aprobar paquete</button>
      </div>
      <div className='package-content'>
        <div className='activities-container'>
          <h3>Actividades</h3>
          <button
            className='add-activity-button'
            onClick={() => handleNav('ACTIVIDAD')}
          >
            + Agregar actividad
          </button>
          <ul>
            {activities.map((activity) => (
              <li key={activity.id}>
                <span>{activity.name}</span>
                <button
                  className='delete-activity-button'
                  onClick={() => handleDelete(activity.name)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className='hotel-container'>
          <h3>Hotel</h3>
          <button
            className='add-hotel-button'
            onClick={() => handleNav('HOTEL')}
          >
            {hotel ? 'Cambiar hotel' : '+ Agregar hotel'}
          </button>
          {hotel ? (
            <ul>
              <li><button onClick={handleDeleteHotel}>X</button></li>
              <li>{hotel.name}</li>
              <li>{hotel.priceDay} por día</li>
            </ul>
          ) : (
            <p>No se ha agregado ningún hotel</p>
          )}
        </div>
      </div>
      <PayPalScriptProvider
        options={{
          'client-id':
            'AYUz54121CeOUjgpCAsy19Y_mYQUlhihSs4Y0z_e5PK3MBjJxIsEHPRGOGLO6wxhnUtNd20Xw7k0z0km',
        }}
      >
        <PayPalButtons
          className='paypal-button'
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: calcularValue(activities, hotel),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function () {
              handleSubmit();
              alert('¡Genial! Su transacción ha sido exitosa');
            });
          }}
          onCancel={(data) => {
            return alert('Pago cancelado.');
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default CustomPackage;
