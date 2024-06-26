import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';


const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonTitle>Tribo da Periferia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src='https://pbs.twimg.com/profile_images/822810026150608897/dIJJVTJt_400x400.jpg' />
        <IonList>
          <IonItem color={'secondary'}>
            <IonLabel>Pianista da Rua 6</IonLabel>
          </IonItem>
          <IonItem color={'secondary'} routerLink='/Tab3'>
            <IonLabel>Imprevisível</IonLabel>
          </IonItem>
          <IonItem color={'secondary'}>
            <IonLabel>Photoshop</IonLabel>
          </IonItem>
        </IonList>

        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
