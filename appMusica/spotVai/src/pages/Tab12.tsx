import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, 
  IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { pause } from 'ionicons/icons';

const Tab12: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src='https://upload.wikimedia.org/wikipedia/pt/6/64/Fear_of_the_dark_-_iron_maiden.jpg' />
        <IonList>
          <IonItem color={'secondary'}>
            <IonLabel>Be Quick or Be Dead</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Fear Is the Key</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>The Fugitive</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Chains of Misery</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

      <IonList>
        <IonItem color='primary'>
        <IonIcon aria-hidden="true" icon={pause} />
          <IonLabel>Iron Maiden - Be Quick or Be Dead</IonLabel>
        </IonItem>
      </IonList>

      <IonButton color='success' routerLink='/tab1'>
        VOLTAR AO INÍCIO
      </IonButton>

    </IonPage>
  );
};

export default Tab12;
