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
        <IonImg src='https://m.media-amazon.com/images/I/71jxpq0Lk5L._UF1000,1000_QL80_DpWeblab_.jpg' />
        <IonList>
          <IonItem color={'secondary'}>
            <IonLabel>In the Flesh?</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>The Thin Ice</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Goodbye Blue Sky</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Young Lust</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>

      <IonList>
        <IonItem color='primary'>
        <IonIcon aria-hidden="true" icon={pause} />
          <IonLabel>Pink Floyd - In the Flesh?</IonLabel>
        </IonItem>
      </IonList>

      <IonButton color='success' routerLink='/tab1'>
        VOLTAR AO INÍCIO
      </IonButton>

    </IonPage>
  );
};

export default Tab9;
