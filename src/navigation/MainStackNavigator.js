import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroSlider from '../screens/Login-SignUp/IntroSlider/IntroSlider';
import Login from '../screens/Login-SignUp/Login/Login';
import SplashScreen from '../screens/Login-SignUp/Splash/SplashScreen';
import ConfirmationPage from '../screens/Login-SignUp/Confirmation/ConfirmationPage';
import ResetPassword from '../screens/Login-SignUp/ResetPassword/ResetPassword';
import VerifyEmail from '../screens/Login-SignUp/VerifyEmail/VerifyEmail';
import ForgotPassword from '../screens/Login-SignUp/ForgotPassword/ForgotPassword';
import SetupAccount from '../screens/ProfileSetup/SetupAccount/SetupAccount';
import PersonalDetails from '../screens/ProfileSetup/PersonalDetails/PersonalDetails';
import Address from '../screens/ProfileSetup/Address/Address';
import SearchLocation from '../screens/ProfileSetup/SearchLocation/SearchLocation';
import Certification from '../screens/ProfileSetup/Certification/Certification';
import HomeClassCreate from '../screens/Home&CreateClass/HomeClassCreate/HomeClassCreate';
import FirstTimeUser from '../screens/Home&CreateClass/FirstTimeUser/FirstTimeUser';
import Basics from '../screens/Home&CreateClass/Basics/Basics';
import VenueAddress from '../screens/Home&CreateClass/VenueAddress/VenueAddress';
import ExerciseTemplateOption from '../screens/Home&CreateClass/ExerciseTemplateOption/ExerciseTemplateOption';
import ExerciseTemplateLibrary from '../screens/Home&CreateClass/ExerciseTemplate/ExerciseTemplateLibrary';
import AddExercise from '../screens/Home&CreateClass/AddExercise/AddExercise';
import AddMusic from '../screens/Home&CreateClass/AddMusic/AddMusic';
import TrainingManual from '../screens/Home&CreateClass/TrainingManual/TrainingManual';
import ExerciseLibrary from '../screens/Home&CreateClass/ExerciseLibrary/ExerciseLibrary';
import AddingClasses from '../screens/MyClass/AddingClasses/AddingClasses';
import UpcomingClasses from '../screens/MyClass/UpcomingClasses/UpcomingClasses';
import ClassDetails from '../screens/MyClass/ClassDetails/ClassDetails';
import BasicDetails from '../screens/MyClass/BasicDetails/BasicDetails';
import VenueAddressDetails from '../screens/MyClass/VenueAddressDetails/VenueAddressDetails';
import ExerciseLibraryDetails from '../screens/MyClass/ExerciseLibraryDetails/ExerciseLibraryDetails';
import SectionPlaylist from '../screens/MyClass/SectionPlaylist/SectionPlaylist';
import MarketingToolkit from '../screens/MarketingToolkit/MarketingToolkit/MarketingToolkit';
import SocialMediaAssets from '../screens/MarketingToolkit/SocialMediaAssets/SocialMediaAssets';
import Brochures from '../screens/MarketingToolkit/Brochures/Brochures';
import VideoLibrary from '../screens/MarketingToolkit/VideoLibrary/VideoLibrary';
import MerchandiseList from '../screens/MarketingToolkit/MerchandiseList/MerchandiseList';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/Profile/ProfileScreen/ProfileScreen';
import ProfileDetails from '../screens/Profile/ProfileDetails/ProfileDetails';
import EditPersonalDetails from '../screens/Profile/EditPersonalDetails/EditPersonalDetails';
import AddressDetails from '../screens/Profile/AddressDetails/AddressDetails';
import CertificationDetails from '../screens/Profile/CertificationDetails/CertificationDetails';
import MerchandiseDetails from '../screens/MarketingToolkit/MerchandiseDetails/MerchandiseDetails';
import MasterTrainerProfile from '../screens/MasterTrainer/MasterTrainerProfile/MasterTrainerProfile';
import HomeCourseScheduled from '../screens/MasterTrainer/MasterTrainerHome/HomeCourseScheduled/HomeCourseScheduled';
import IncidentReport from '../screens/MasterTrainer/MasterTrainerHome/IncidentReports/IncidentReport';
import History from '../screens/MasterTrainer/MasterTrainerHome/History/History';
import IncidentParticipants from '../screens/MasterTrainer/MasterTrainerHome/IncidentParticipants/IncidentParticipants';
import IncidentDetail from '../screens/MasterTrainer/MasterTrainerHome/IncidentDetail/IncidentDetail';
import ManagementToolkit from '../screens/MasterTrainer/CourseManagement/ManagementToolkit/ManagementToolkit';
import Settings from '../screens/Profile/Settings/Settings';
import CourseDocuments from '../screens/MasterTrainer/CourseManagement/CourseDocuments/CourseDocuments';
import CourseDocumentsFullView from '../screens/MasterTrainer/CourseManagement/CourseDocumentsFullView/CourseDocumentsFullView';
import Notes from '../screens/MasterTrainer/CourseManagement/Notes/Notes';
import MySchedule from '../screens/MasterTrainer/CourseManagement/MySchedule/MySchedule';
import MarkAttendance from '../screens/MasterTrainer/CourseManagement/MarkAttendance/MarkAttendance';
import AbsenteeList from '../screens/MasterTrainer/CourseManagement/AbsenteeList/AbsenteeList';
import AbsentReason from '../screens/MasterTrainer/CourseManagement/AbsentReason/AbsentReason';
import AttendanceMarkedDetails from '../screens/MasterTrainer/CourseManagement/AttendanceMarkedDetails/AttendanceMarkedDetails';
import ContactUs from '../screens/Profile/ContactUs/ContactUs';
import SearchScreens from '../screens/SearchScreens';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="SplashScreen">
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen
      name="classStack"
      component={ClassStack}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="IntroSlider" component={IntroSlider} />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen
      name="SetupAccount"
      component={SetupAccount}
      options={{gestureEnabled: false}}
    />
    <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
    <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="SearchLocation" component={SearchLocation} />
    <Stack.Screen name="Certification" component={Certification} />
    {/* <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} /> */}
    <Stack.Screen name="HomeClassCreate" component={HomeClassCreate} />
    <Stack.Screen name="FirstTimeUser" component={FirstTimeUser} />
    <Stack.Screen name="Basics" component={Basics} />
    <Stack.Screen name="VenueAddress" component={VenueAddress} />
    <Stack.Screen
      name="ExerciseTemplateOption"
      component={ExerciseTemplateOption}
    />
    <Stack.Screen
      name="ExerciseTemplateLibrary"
      component={ExerciseTemplateLibrary}
    />
    <Stack.Screen name="AddExercise" component={AddExercise} />
    <Stack.Screen name="AddMusic" component={AddMusic} />
    <Stack.Screen name="TrainingManual" component={TrainingManual} />
    <Stack.Screen name="ExerciseLibrary" component={ExerciseLibrary} />
    <Stack.Screen name="ClassDetails" component={ClassDetails} />
    <Stack.Screen name="BasicDetails" component={BasicDetails} />
    <Stack.Screen name="VenueAddressDetails" component={VenueAddressDetails} />
    <Stack.Screen
      name="ExerciseLibraryDetails"
      component={ExerciseLibraryDetails}
    />
    <Stack.Screen
      name="SectionPlaylist"
      component={SectionPlaylist}
      options={{orientation: 'portrait'}}
    />
    <Stack.Screen name="MarketingToolkit" component={MarketingToolkit} />
    <Stack.Screen name="SocialMediaAssets" component={SocialMediaAssets} />
    <Stack.Screen name="Brochures" component={Brochures} />
    <Stack.Screen name="VideoLibrary" component={VideoLibrary} />
    <Stack.Screen name="MerchandiseList" component={MerchandiseList} />
    <Stack.Screen name="MerchandiseDetails" component={MerchandiseDetails} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
    <Stack.Screen name="EditPersonalDetails" component={EditPersonalDetails} />
    <Stack.Screen name="AddressDetails" component={AddressDetails} />
    <Stack.Screen
      name="CertificationDetails"
      component={CertificationDetails}
    />
    <Stack.Screen name="Settings" component={Settings} />
    <Stack.Screen name="ContactUs" component={ContactUs} />
    <Stack.Screen
      name="MasterTrainerProfile"
      component={MasterTrainerProfile}
    />
    <Stack.Screen name="HomeCourseScheduled" component={HomeCourseScheduled} />
    <Stack.Screen name="IncidentReport" component={IncidentReport} />
    <Stack.Screen name="History" component={History} />
    <Stack.Screen
      name="IncidentParticipants"
      component={IncidentParticipants}
    />
    <Stack.Screen name="IncidentDetail" component={IncidentDetail} />
    <Stack.Screen name="ManagementToolkit" component={ManagementToolkit} />
    <Stack.Screen name="CourseDocuments" component={CourseDocuments} />
    <Stack.Screen
      name="CourseDocumentsFullView"
      component={CourseDocumentsFullView}
    />
    <Stack.Screen name="Notes" component={Notes} />
    <Stack.Screen name="MySchedule" component={MySchedule} />
    <Stack.Screen name="MarkAttendance" component={MarkAttendance} />
    <Stack.Screen name="AbsenteeList" component={AbsenteeList} />
    <Stack.Screen name="AbsentReason" component={AbsentReason} />
    <Stack.Screen
      name="AttendanceMarkedDetails"
      component={AttendanceMarkedDetails}
    />
    <Stack.Screen name="SearchScreens" component={SearchScreens} />
  </Stack.Navigator>
);

export const ClassStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="AddingClasses" component={AddingClasses} />
    <Stack.Screen name="UpcomingClasses" component={UpcomingClasses} />
  </Stack.Navigator>
);
