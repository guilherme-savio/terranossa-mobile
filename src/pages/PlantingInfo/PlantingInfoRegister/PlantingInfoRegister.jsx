import React, { useState, useContext, useEffect } from 'react';

import PageTitle from '../../../components/PageTitle';
import { ScrollView, View } from 'react-native';


export function PlantingInfoRegister() {
    return <><PageTitle
    title="Cadastre novas plantas"
    desc="Cadastre novas informações de cultivo de plantas!"
    img={require("src/assets/img/gardening-tools.png")} /><ScrollView>
    </ScrollView></>
}