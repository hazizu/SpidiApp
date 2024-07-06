import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import LogoIcon from './../../../assets/img/logo'
import * as Yup from 'yup';
import { Formik } from "formik";
import InputField from "../../../composants/Inputs/InputField";
import ButtonStyle from "../../../composants/Inputs/Button";
import { CountryPicker } from "react-native-country-codes-picker";


const Register = ({navigation}) => {
    const [notActualPass, setNotActualPass] = useState(false)
    const [isIdentiquePass, setIsIdentiquePass] = useState(false)
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');


    const initialValuesform = {
        name: '',
        phone: '',
        email: '',
        password: ''
    }
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Minimum 4 lettres')
            .required('Veuillez entrer votre nom'),



        phone: Yup.string()
            .min(8, 'Minimum 8 chiffres')
            .matches(phoneRegExp, 'numéro invalide')
            .required('Veuillez entrer votre numéro de téléphone'),


        email: Yup.string().email('Email invalide')
            .required('Veuillez entrer votre email'),

        password: Yup.string()
            .min(8, 'Au moins 8 caractères')
            .required('Entrer votre mot de passe'),

    });

    const goToHome = ()=>{
        navigation.push('home')
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoContent}>
                        <LogoIcon />
                    </View>
                    <Text style={styles.logoTest}>Spidi</Text>

                </View>

                <View style={styles.formContainer}>
                    <ScrollView style={{ flex: 1, }}>
                        <View style={styles.formContent}>
                            <Formik
                                enableReinitialize={true}
                                initialValues={initialValuesform}
                                validationSchema={validationSchema}
                                onSubmit={(values) => {

                                }

                                }>

                                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                    <View style={styles.inputBlock}>

                                        <View style={{ paddingBottom: 250 }}>
                                            <View style={styles.inputGroup}>
                                                <InputField
                                                    placeholder="Nom d'utilisateur"
                                                    type="name"
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    libelle="Votre nom"
                                                    value={values.name}
                                                    borderRed={touched.name && errors.name}
                                                />
                                                <View style={styles.erreurMsg}>
                                                    {touched.name && errors.name ? <Text style={styles.erreurText}>{errors.name}</Text> : null}
                                                </View>
                                            </View>
                                            <View style={styles.inputGroup}>
                                                <TouchableOpacity style={styles.countrySelect} onPress={()=>setShow(true)}>
                                                    {countryCode && (
                                                        <Text>{countryCode}</Text>
                                                    )}
                                                    {!countryCode &&(
                                                         <Text style={styles.countryLib}>Votre pays</Text>

                                                    )}
                                                   
                                                </TouchableOpacity>
                                            </View>



                                            <View style={styles.inputGroup}>
                                                <InputField
                                                    placeholder="+000 Numéro de téléphone"
                                                    type="phone"
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    libelle="Votre téléphone"
                                                    value={values.phone}
                                                    borderRed={touched.phone && errors.phone}
                                                />
                                                <View style={styles.erreurMsg}>
                                                    {touched.phone && errors.phone ? <Text style={styles.erreurText}>{errors.phone}</Text> : null}
                                                </View>
                                            </View>

                                            <View style={styles.inputGroup}>
                                                <InputField
                                                    placeholder="E-mail"
                                                    type="email"
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    libelle="Votre email de récuperation"
                                                    value={values.email}
                                                    borderRed={touched.email && errors.email}
                                                />
                                                <View style={styles.erreurMsg}>
                                                    {touched.email && errors.email ? <Text style={styles.erreurText}>{errors.email}</Text> : null}
                                                </View>
                                            </View>

                                            <View style={styles.inputGroup}>
                                                <InputField
                                                    placeholder="Entrez votre mot de passe actuel"
                                                    type="password"
                                                    handleChange={handleChange}
                                                    handleBlur={handleBlur}
                                                    libelle="Mot de passe actuel"
                                                    value={values.password}
                                                    borderRed={(touched.password && errors.password || notActualPass)}
                                                />
                                                <View style={styles.erreurMsg}>
                                                    {touched.password && errors.password ? <Text style={styles.erreurText}>{errors.password}</Text> : null}
                                                </View>
                                            </View>
                                        </View>



                                    </View>

                                )}

                            </Formik>


                        </View>
                    </ScrollView>
                    
                    <CountryPicker
                        show={show}
                        onBackdropPress={()=>setShow(false)}
                        style={{
                            // Styles for whole modal [View]
                            modal: {
                                height: 400, 
                               
                            },}}
                        // when picker button press you will get the country object with dial code
                        pickerButtonOnPress={(item) => {
                            console.log('country', item.name.fr)
                            setCountryCode(item.name.fr);
                            setShow(false);
                        }}
                      
                    />
                        
                    </View>
                   
                </View>
                <View style={styles.btnBloc}>
                    <ButtonStyle libelle={'Dream big make big'} onEventEmit={()=>goToHome()}/>
                </View>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoContainer: {
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    logoTest: {
        fontSize: 40,
        fontWeight: '500'
    },
    logoContent: {
        marginLeft: -50,
        marginBottom: 5
    },
    formContainer: {
        height: '60%',

    },
    inputBlock: {
        height: "100%"
    },
    inputGroup: {
        marginTop: 15
    },
    erreurMsg: {
        marginTop: 5
    },
    erreurText: {
        color: "red"
    },
    formContent: {
        marginHorizontal: 25

    },
    btnBloc: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 25,
        marginBottom:50
    },
    countrySelect: {
        borderWidth: 1,
        height: 50,
        paddingLeft: 10,
        fontSize: 16,
        borderColor: "#575757",
        marginTop: 5,
        borderRadius: 15,
        color: "#000",
        backgroundColor: '#ebebeb',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "center"
    },
    countryLib: {
        color: "gray"

    }
})