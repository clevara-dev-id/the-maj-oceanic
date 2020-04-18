import React, { lazy } from 'react'
import { connect } from 'react-redux'
import Base from './Base'

/* Svg Skeleton */
import HeadSvg from '../assets/img/home/svg/head.svg'

/* Components */
import { ContentLoader } from '../components/base_component/Loader'
const HeadBackground = lazy(() => import('../components/HeadBackground'))
const NavigationBar = lazy(() => import('../components/NavigationBar'))
const FooterDesktop = lazy(() => import('../components/base_component/Footer/Desktop/FooterDesktop'))

const mapStateToProps = state => ({
    head_background: state.page.head_background,
})

class connectApplicationLayout extends Base {
    constructor(props){
        super(props);
 
        this.state = {
            fields: {},
            errors: {}

        }
     }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        //Email
        if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
                }
        }  

        this.setState({errors: errors});
        return formIsValid;
    }

    handleClickButton = () =>{
        this.handleValidation() ? console.log('true') : console.log('false')
    }
    handleChange = (field, e)=>{         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    render() {
        return (
            <div>
                <header>
                    {/* <NavigationBar /> */}
                    <HeadBackground bg={this.props.head_background.image} text={this.props.head_background.text} />
                </header>

                {this.props.children}

                <footer>
                    <FooterDesktop
                        // onChangeEmail={console.log("test")}
                        onClickTitle={(e)=>{console.log(e.target.value)}}

                        valueName={this.state.fields['name']}
                        onChangeName={this.handleChange.bind(this,"name")}
                        onBlurName={()=>{this.handleValidation()}}
                        nameError={this.state.errors["name"]}

                        valueEmail={this.state.fields['email']}
                        onChangeEmail={this.handleChange.bind(this,"email")}
                        onBlurEmail={()=>{this.handleValidation()}}
                        emailError={this.state.errors["email"]}

                        onClickButton={()=>{this.handleClickButton()}}
                    />
                </footer>
            </div>
        )
    }
}

const ApplicationLayout = connect(mapStateToProps, null)(connectApplicationLayout)
export default ApplicationLayout

const HeadSkeleton = props => (
    <div>
        <ContentLoader style={{backgroundColor: "#FFFFFF", justifyContent: "center"}}>
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />

            {/* <rect x="46" y="20" rx="3" ry="3" width="50" height="50" fill="#C4C4C4"/>
            <rect x="80" y="20" rx="3" ry="3" width="50" height="50" fill="#C4C4C4"/> */}
        </ContentLoader>
    </div>
)
