import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, 
  IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import { pause } from 'ionicons/icons';

const Tab11: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src='https://upload.wikimedia.org/wikipedia/pt/b/b6/Back_in_Black.jpg' />
        <IonList>
        <IonItem color={'secondary'}>
            <IonLabel>Hells Bells</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Shoot to Thrill</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>What Do You Do for Money Honey</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Givin the Dog a Bone</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

      <IonList>
        <IonItem color='primary'>
        <IonIcon aria-hidden="true" icon={pause} />
          <IonLabel>AC DC - Hells Bells</IonLabel>
        </IonItem>
      </IonList>

      <IonButton color='success' routerLink='/tab1'>
        VOLTAR AO INÍCIO
      </IonButton>

    </IonPage>
  );
};

export default Tab11;
