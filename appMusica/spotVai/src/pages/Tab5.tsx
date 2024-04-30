import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonCard, IonButton } from '@ionic/react';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'secondary'}>
          <IonTitle>Tab 5</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tela de login</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <IonCard>
            <IonInput placeholder='Digite o seu login'/>
            <IonInput placeholder='Digite o seu login' type='password' />
        </IonCard>
        

        
      </IonContent>
      <IonButton routerLink='/tab1' color='danger'>
        Logar
      </IonButton>
    </IonPage>
  );
};

export default Tab5;
