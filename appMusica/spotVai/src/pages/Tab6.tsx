import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonAvatar, IonImg, IonLabel, IonList } from '@ionic/react';

const Tab6: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}> 
          <IonTitle>Tab 6</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tela de login</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <IonList>
            <IonItem  routerLink='/tab7'>
                <IonAvatar slot='start'>
                    <IonImg src="https://i.ytimg.com/vi/RJN6OvMTN8A/maxresdefault.jpg"/>
                </IonAvatar>
                <IonLabel>Boate Azul</IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
      
    </IonPage>
  );
};

export default Tab6;
