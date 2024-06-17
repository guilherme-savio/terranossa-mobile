import React, { useState, useContext, useEffect } from 'react';

import { Link } from 'expo-router';
import PageTitle from '../../components/PageTitle';
import { ScrollView, View } from 'react-native';


export function PlantingInfo() {
    return (
        <><PageTitle
            title="Informações para plantio"
            desc="Verifique informações para o plantio de determinados alimentos ou cadastre novas informações."
            img={require("src/assets/img/gardening-tools.png")} /><ScrollView>
                <Link
                    suppressHighlighting
                    className="flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/planting-info-register">
                    Cadastrar novas informações
                </Link>
            </ScrollView></>
    );
}