import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, 
  IonList, IonItem, IonLabel, IonFooter, IonIcon, IonText } from '@ionic/react';
import { pause } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-color-dark'>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src='https://i.ytimg.com/vi/YrQLmElRT-E/maxresdefault.jpg' />
        <IonList>
          <IonItem>
            <IonLabel>Imprevisível</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Tribo da Periferia - Acústico na Cachu</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

      <IonList>
          <IonItem>
          <IonIcon aria-hidden="true" icon={pause} />
            <IonLabel>Tribo da Periferia - Imprevisível</IonLabel>
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

export default Tab3;
