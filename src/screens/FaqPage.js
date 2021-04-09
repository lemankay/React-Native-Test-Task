import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authorization_Issues from '../components/Faq/Authorization_Issues';
import Faq from '../components/Faq/Faq';
import The_first_steps from '../components/Faq/The_first_steps';
import Payment from '../components/Faq/Payment';
const Stack = createStackNavigator();



function FaqPage() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Faq" component={Faq}      options={{
          title: 'Faq',
          headerStyle: {
            backgroundColor: '#f3f2f2',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
            marginLeft:'45%' 
          },
        }}
        />
        <Stack.Screen name="Authorization_Issues" component={Authorization_Issues}  options={{ title: 'Authorization Issues' }} />
        <Stack.Screen name="The_first_steps" component={The_first_steps} options={{ title: 'The first steps' }}/>
        <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
}
export default FaqPage;