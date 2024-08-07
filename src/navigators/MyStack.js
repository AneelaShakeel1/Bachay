import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Splash Screen:
import Splash from '../screens/Splash';
// Auth Stack:
import Onboard from '../screens/auth/onboard/Onboard';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import CheckEmailPassword from '../screens/auth/forgotPassword/checkEmailPassword/CheckEmailPassword';
import VerifyOtpPassword from '../screens/auth/forgotPassword/verifyOtpPassword/VerifyOtpPassword';
import ResetPassword from '../screens/auth/forgotPassword/resetPassword/ResetPassword';
// Tab Navigation Screens:
import BottomTabNavigation from './BottomTabNavigation';
// Main Stack:
// Shopping Screens:
import DealsProducts from '../screens/main/shopping/dealsProducts/DealsProducts';
import AllCategories from '../screens/main/shopping/allCategories/AllCategories';
import SubCategories from '../screens/main/shopping/subCategories/SubCategories';
import CategoriesProducts from '../screens/main/shopping/categoriesProducts/CategoriesProducts';
import SearchFilter from '../screens/main/shopping/searchFilter/SearchFilter';
import SingleProduct from '../screens/main/shopping/singleProduct/SingleProduct';
import MyShortlist from '../screens/main/cart/myShortlist/MyShortlist';
import CartScreen from '../screens/main/cart/cartScreen/CartScreen';
import PlaceOrderScreen from '../screens/main/cart/placeOrderScreen/PlaceOrderScreen';
import PaymentScreen from '../screens/main/cart/paymentScreen/PaymentScreen';
import CreditCardScreen from '../screens/main/cart/creditCardScreen/CreditCardScreen';
import CardDeleteScreen from '../screens/main/cart/cardDeleteScreen/CardDeleteScreen';
import OrderPlacedScreen from '../screens/main/cart/orderPlacedScreen/OrderPlacedScreen';
import SearchScreen from '../screens/main/shopping/searchScreen/SearchScreen';
import Notifications from '../screens/main/shopping/notifications/Notifications';
import Reviews from '../screens/main/shopping/reviews/Reviews';
import ProductQA from '../screens/main/shopping/productQA/ProductQA';
import HomePage from '../screens/main/shopping/homePage/HomePage';
import AllProducts from '../screens/main/shopping/allProducts/AllProducts';
import CustomScreen from '../screens/main/shopping/customScreen/CustomScreen';
// Profile Screens:
import ProfileLogin from '../screens/main/profile/profileLogin/ProfileLogin';
import PasswordChange from '../screens/main/profile/passwordChange/PasswordChange';
import CheckEmail from '../screens/main/profile/checkEmail/CheckEmail';
import VerifyOtp from '../screens/main/profile/verifyOtp/VerifyOtp';
import ChildList from '../screens/main/profile/childrenList/ChildList';
import AddChild from '../screens/main/profile/addChild/AddChild';
import EditChild from '../screens/main/profile/editChild/EditChild';
import GuardianScreen from '../screens/main/profile/guardianScreen/GuardianScreen';
import CashRefundScreen from '../screens/main/profile/cashRefundScreen/CashRefundScreen';
import CashCouponsScreen from '../screens/main/profile/cashCouponsScreen/CashCouponsScreen';
import MyRefunds from '../screens/main/profile/myRefunds/MyRefunds';
import ClubCashScreen from '../screens/main/profile/clubCashScreen/ClubCashScreen';
import CashbackCode from '../screens/main/profile/cashbackCode/CashbackCode';
import OrderHistory from '../screens/main/profile/orderHistory/OrderHistory';
import TrackingOrderDetails from '../screens/main/profile/trackingOrderDetails/TrackingOrderDetails';
import ManageReturns from '../screens/main/profile/manageReturns/ManageReturns';
import ReturnsDetails from '../screens/main/profile/returnsDetails/ReturnsDetails';
import OrderHistoryDetails from '../screens/main/profile/orderHistoryDetails/OrderHistoryDetails';
import MyAccount from '../screens/main/profile/myAccount/MyAccount';
// saving offer Screens
import GuaranteedSaving from '../screens/main/profile/guaranteedSaving/GuaranteedSaving';
import GuaranteedSavingOffer from '../screens/main/profile/guaranteedSaving/guarateedSavingOffer/GuaranteedSavingOffer';
import OfferBenefits from '../screens/main/profile/guaranteedSaving/offerBenefits/OfferBenefits';
import OfferWorks from '../screens/main/profile/guaranteedSaving/howItWorks/HowItWorks';
import OfferFAQs from '../screens/main/profile/guaranteedSaving/offerFAQs/OfferFAQs';
import OfferSingleProduct from '../screens/main/profile/guaranteedSaving/offerSingleProduct/OfferSingleProduct';
// intelli Education Subscription Screens
import IntellibabySubscription from '../screens/main/profile/intelliEducationSubscription/intellibabySubscription/IntellibabySubscription';
import IntellikitSubscription from '../screens/main/profile/intelliEducationSubscription/intellikitSubscription/IntellikitSubscription';
//
import FitJuniorSubscription from '../screens/main/profile/fitJuniorSubscription/FitJuniorSubscription';
import GiftCertificate from '../screens/main/profile/giftCertificate/GiftCertificate';
import InvitesAndCredits from '../screens/main/profile/invitesAndCredits/InvitesAndCredits';
import AddressBook from '../screens/main/profile/addressBook/AddressBook';
import AddAddress from '../screens/main/profile/addAddress/AddAddress';
import EditAddress from '../screens/main/profile/editAddress/EditAddress';
import ContactDetails from '../screens/main/profile/contactDetails/ContactDetails';
import QuickOrders from '../screens/main/profile/quickOrders/QuickOrders';
// My Payment Details Screens
import BankAccounts from '../screens/main/profile/myPaymentDetails/bankAccounts/BankAccounts';
import AddBankAccount from '../screens/main/profile/myPaymentDetails/addBankAccount/AddBankAccount';
import CardList from '../screens/main/profile/myPaymentDetails/cardList/CardList';

// Review
import Review from '../screens/main/profile/review/Review';
import History from '../screens/main/profile/history/History';
import AddReview from '../screens/main/profile/addReview/AddReview';

// Explore Screens:
import ExploreScreen from '../screens/main/explore/exploreScreen/ExploreScreen';
import ExploreProfile from '../screens/main/explore/exploreProfile/ExploreProfile';
// Parenting Screens
import BabyCareTips from '../screens/main/parenting/parentingRead/babyCareTips/BabyCareTips';
import CategoryList from '../screens/main/parenting/parentingRead/categoryList/CategoryList';
import BabyTeethingBiscuits from '../screens/main/parenting/parentingRead/babyCareTips/babyTeethingBiscuits/BabyTeethingBiscuits';
import ViewAnswer from '../screens/main/parenting/parentingQA/viewAnswer/ViewAnswer';
import AddQuestion from '../screens/main/parenting/parentingQA/viewAnswer/addQuestion/AddQuestion';
import AddAnswer from '../screens/main/parenting/parentingQA/viewAnswer/addAnswer/AddAnswer';
import ParentingProfile from '../screens/main/parenting/parentingProfile/ParentingProfile';
import VaccineTrackerUpdate from '../screens/main/parenting/parentingVaccine/vaccineTrackerUpdate/VaccineTrackerUpdate';
import VaccineTrackerGrowth from '../screens/main/parenting/parentingVaccine/vaccineTrackerGrowth/VaccineTrackerGrowth';
import CategoryQuiz from '../screens/main/parenting/parentingQuiz/categoryQuiz/CategoryQuiz';
import HomeQuiz from '../screens/main/parenting/parentingQuiz/homeQuiz/HomeQuiz';
import QuizQA from '../screens/main/parenting/parentingQuiz/quizQA/QuizQA';
import QuizComplete from '../screens/main/parenting/parentingQuiz/quizComplete/QuizComplete';

// BPL Screens
import Home from '../screens/main/parenting/bpl/home/Home';
import FAQ from '../screens/main/parenting/bpl/FAQ/FAQ'
import Rules from '../screens/main/parenting/bpl/Rules/Rules';
import Badges from '../screens/main/parenting/bpl/badges/Badges';
import Rank from '../screens/main/parenting/bpl/rank/Rank';
import Rewards from '../screens/main/parenting/bpl/rewards/Rewards';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      {/* Splash Screen: */}
      <Stack.Screen name="Splash" component={Splash} />
      {/* Auth Stack: */}
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="CheckEmailPassword" component={CheckEmailPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyOtpPassword" component={VerifyOtpPassword} />
      {/* Tab Navigation Screens: */}
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
      {/* Main Stack: */}
      {/* Shopping Screens: */}
      <Stack.Screen name="DealsProducts" component={DealsProducts} />
      <Stack.Screen name="AllCategories" component={AllCategories} />
      <Stack.Screen name="SubCategories" component={SubCategories} />
      <Stack.Screen name="CategoriesProducts" component={CategoriesProducts} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="MyShortlist" component={MyShortlist} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="PlaceOrderScreen" component={PlaceOrderScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} />
      <Stack.Screen name="CardDeleteScreen" component={CardDeleteScreen} />
      <Stack.Screen name="OrderPlacedScreen" component={OrderPlacedScreen} />
      <Stack.Screen name="CustomScreen" component={CustomScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Reviews" component={Reviews} />
      <Stack.Screen name="ProductQA" component={ProductQA} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      {/* Profile Screens: */}
      <Stack.Screen name="ProfileLogin" component={ProfileLogin} />
      <Stack.Screen name="PasswordChange" component={PasswordChange} />
      <Stack.Screen name="CheckEmail" component={CheckEmail} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="ChildList" component={ChildList} />
      <Stack.Screen name="AddChild" component={AddChild} />
      <Stack.Screen name="EditChild" component={EditChild} />
      <Stack.Screen name="GuardianScreen" component={GuardianScreen} />
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="CashRefundScreen" component={CashRefundScreen} />
      <Stack.Screen name="CashCouponsScreen" component={CashCouponsScreen} />
      <Stack.Screen name="MyRefunds" component={MyRefunds} />
      <Stack.Screen name="ClubCashScreen" component={ClubCashScreen} />
      <Stack.Screen name="CashbackCode" component={CashbackCode} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="TrackingOrderDetails" component={TrackingOrderDetails} />
      <Stack.Screen name="ManageReturns" component={ManageReturns} />
      <Stack.Screen name="ReturnsDetails" component={ReturnsDetails} />
      <Stack.Screen name="OrderHistoryDetails" component={OrderHistoryDetails} />
      {/* Saving offer screens */}
      <Stack.Screen name="GuaranteedSaving" component={GuaranteedSaving} />
      <Stack.Screen name="GuaranteedSavingOffer" component={GuaranteedSavingOffer} />
      <Stack.Screen name="OfferBenefits" component={OfferBenefits} />
      <Stack.Screen name="OfferWorks" component={OfferWorks} />
      <Stack.Screen name="OfferFAQs" component={OfferFAQs} />
      <Stack.Screen name="OfferSingleProduct" component={OfferSingleProduct} />
      {/*  */}
      {/* intelli Education Subscription Scrrens */}
      <Stack.Screen name="IntellibabySubscription" component={IntellibabySubscription} />
      <Stack.Screen name="IntellikitSubscription" component={IntellikitSubscription} />
      {/*  */}
      <Stack.Screen name="FitJuniorSubscription" component={FitJuniorSubscription} />
      <Stack.Screen name="GiftCertificate" component={GiftCertificate} />
      <Stack.Screen name="InvitesAndCredits" component={InvitesAndCredits} />
      <Stack.Screen name="AddressBook" component={AddressBook} />
      <Stack.Screen name="AddAddress" component={AddAddress} />
      <Stack.Screen name="EditAddress" component={EditAddress} />
      <Stack.Screen name="ContactDetails" component={ContactDetails} />
      <Stack.Screen name="QuickOrders" component={QuickOrders} />
      {/* My Payment Details Screens */}
      <Stack.Screen name="BankAccounts" component={BankAccounts} />
      <Stack.Screen name="AddBankAccount" component={AddBankAccount} />
      <Stack.Screen name="CardList" component={CardList} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="AddReview" component={AddReview} />
      {/* Explore Screens: */}
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="ExploreProfile" component={ExploreProfile} />
      {/* Parenting Screen */}
      <Stack.Screen name="BabyCareTips" component={BabyCareTips} />
      <Stack.Screen name="CategoryList" component={CategoryList} />
      <Stack.Screen name="BabyTeethingBiscuits" component={BabyTeethingBiscuits} />
      <Stack.Screen name="ViewAnswer" component={ViewAnswer} />
      <Stack.Screen name="AddQuestion" component={AddQuestion} />
      <Stack.Screen name="AddAnswer" component={AddAnswer} />
      <Stack.Screen name="ParentingProfile" component={ParentingProfile} />
      <Stack.Screen name="VaccineTrackerUpdate" component={VaccineTrackerUpdate} />
      <Stack.Screen name="VaccineTrackerGrowth" component={VaccineTrackerGrowth} />
      <Stack.Screen name="CategoryQuiz" component={CategoryQuiz} />
      <Stack.Screen name="HomeQuiz" component={HomeQuiz} />
      <Stack.Screen name="QuizQA" component={QuizQA} />
      <Stack.Screen name="QuizComplete" component={QuizComplete} options={{ animation: 'slide_from_bottom' }} />
      {/* BPL Screens */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="Badges" component={Badges} />
      <Stack.Screen name="Rank" component={Rank} />
      <Stack.Screen name="Rewards" component={Rewards} />
    </Stack.Navigator>
  );
}
