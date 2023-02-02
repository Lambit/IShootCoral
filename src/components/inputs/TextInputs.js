import React from 'react';

//Packages
import { Controller } from "react-hook-form";
import { useTheme, Input, Text, FormControl, } from 'native-base';

/*-----PhoneInput-----
  Phone Input for calender screen with props, and form control.
*/ 

export const PhoneInput = ({ text, name, control, rules = {}, onFocus, borderColor }) => {
    const { color, bR, lineHi } = useTheme();
    return(
        /*-------------------
         *   Controller    *
        --------------------*/
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: {value, onChange, onBlur }, fieldState: {error}, formState:{isDirty, dirtyFields} }) =>(
              <>
                <FormControl.Label
                  _text={{ 
                    color: color.white, 
                    p:'0.5',
                    fontSize: 'xs',
                  }}
                >
                   {text}
                </FormControl.Label>

                    {/*-------------------
                      *   Input         *
                    --------------------*/}
                    <Input 
                        size='xs'
                        py='4'
                        borderRadius={bR.md}
                        borderColor= {error ? color.red : color.aqua } 
                        variant="outline"
                        keyboardType='numeric'
                        placeholder='Phone'
                        value={value}
                        onChangeText={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        _input={{
                          color: color.yellow, 
                          fontSize: 'lg'
                        }}
                        _focus={{ 
                          borderColor: error ? color.red : borderColor, 
                          borderWidth: 1,
                        }}  
                    />

                    {/*-------------------
                      *   Error Text    *
                    --------------------*/}

                    { error ?
                      <Text style={{ 
                        fontWeight: 'bold', fontSize: 12, color: color.red, alignSelf: 'stretch',
                        }}
                      > 
                        {error.message || error.pattern || 'Error' } 
                      </Text>
                      :
                      <Text style={{ 
                        fontSize: 10, color: color.white, alignSelf: 'stretch', lineHeight: 14
                        }}
                      > 
                        Enter phone number to confirm and reserve date. You will receive a text shortly after. 
                      </Text>
                    }
                    {/* { error && 
                      <Text style={{ 
                        fontWeight: 'bold', fontSize: 12, color: color.red, alignSelf: 'stretch',
                        }}
                      > 
                        {error.message || error.pattern || 'Error' } 
                      </Text>
                    } */}

                </>

            )}
        /> 
    );
};