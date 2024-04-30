import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, 
  IonList, IonItem, IonLabel, IonFooter, IonIcon, IonText } from '@ionic/react';
import { pause } from 'ionicons/icons';

const Tab7: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonImg src='https://i.ytimg.com/vi/RJN6OvMTN8A/maxresdefault.jpg' />
      <IonContent>
        <h3>Boate Azul</h3>
        <h3>Edson e Hudson</h3>
      </IonContent>

      <IonList>
          <IonItem color='primary'>
          <IonIcon aria-hidden="true" icon={pause} />
            <IonLabel>Edson e Hudson - Boate Azul</IonLabel>
          </IonItem>
        </IonList>

      {/* <IonFooter>
        <IonToolbar>
          <IonIcon aria-hidden="true" icon={pause} />
          <IonText>Tribo da Periferia - Imprevisível</IonText>
        </IonToolbar>
      </IonFooter> */}
    </IonPage>
  );
};

export default Tab7;
