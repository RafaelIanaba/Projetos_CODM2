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
      <IonContent fullscreen>
        <IonImg src='https://upload.wikimedia.org/wikipedia/pt/1/18/220px-SystemofaDownToxicityalbumcover.jpg' />
        <IonList>
          <IonItem color={'secondary'}>
            <IonLabel>Prison Song</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Needles</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Deer Dance</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Jet Pilot</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

      <IonList>
        <IonItem color='primary'>
        <IonIcon aria-hidden="true" icon={pause} />
          <IonLabel>System of a Down - Prison Song</IonLabel>
        </IonItem>
      </IonList>

      <IonButton color='success' routerLink='/tab1'>
        VOLTAR AO INÍCIO
      </IonButton>

    </IonPage>
  );
};

export default Tab9;
