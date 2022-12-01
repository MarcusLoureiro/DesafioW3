import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Homepage from '../componentes/Home';
import Dashboard from '../componentes/Dashboard';
import Extrato from '../componentes/Dashboard/Extrato';
import GiftCards from '../componentes/Dashboard/GiftCards';
import Inicio from '../componentes/Dashboard/Inicio';
import Transferencia from '../componentes/Dashboard/Transferencia';
import Login from '../componentes/Login';
import Cadastro from '../componentes/Cadastro';


export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="inicio" element={<Inicio />} />
                <Route path="transferencia" element={<Transferencia />} />
                <Route path="extrato" element={<Extrato />} />
                <Route path="giftcards" element={<GiftCards />}/>
            </Route>
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="login" element={<Login />} />
        </Routes>
    );
}