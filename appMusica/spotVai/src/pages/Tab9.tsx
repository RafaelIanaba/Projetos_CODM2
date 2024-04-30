import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, 
  IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { pause } from 'ionicons/icons';

const Tab9: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src='https://m.media-amazon.com/images/I/71H9ZR6EGFL._AC_UF1000,1000_QL80_DpWeblab_.jpg' />
        <IonList color={'secondary'}>
          <IonItem color='secondary'>
            <IonLabel >Welcome to the Jungle</IonLabel>
          </IonItem>
          <IonItem color='secondary'>
            <IonLabel>Welcome to the Jungle</IonLabel>
          </IonItem>
          <IonItem color='secondary'>
            <IonLabel>Welcome to the Jungle</IonLabel>
          </IonItem>
          <IonItem color='secondary'>
            <IonLabel>Welcome to the Jungle</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

      <IonList>
        <IonItem color='primary'>
        <IonIcon aria-hidden="true" icon={pause} />
          <IonLabel>Guns N Roses - Welcome to the Jungle</IonLabel>
        </IonItem>
      </IonList>

      <IonButton color='success' routerLink='/tab1'>
        VOLTAR AO INÍCIO
      </IonButton>

    </IonPage>
  );
};

export default Tab9;
