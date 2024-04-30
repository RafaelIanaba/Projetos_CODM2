import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, 
  IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { pause } from 'ionicons/icons';

const Tab10: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src='https://m.media-amazon.com/images/I/71VpqI19tpL._UF1000,1000_QL80_.jpg' />
        <IonList>
          <IonItem color={'secondary'}>
            <IonLabel>Fight Fire With Fire</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Ride the Lightning</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>For Whom the Bell Tolls</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Fade to Black</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

      <IonList>
        <IonItem color='primary'>
        <IonIcon aria-hidden="true" icon={pause} />
          <IonLabel>Metalica - Fight Fire With Fire</IonLabel>
        </IonItem>
      </IonList>

      <IonButton color='success' routerLink='/tab1'>
        VOLTAR AO INÍCIO
      </IonButton>

    </IonPage>
  );
};

export default Tab10;
