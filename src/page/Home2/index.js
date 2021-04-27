import styles from "./style.module.scss";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import {ReactComponent as Curve1} from "../../components/shapes/curves/curve-1.svg";

import IMG_Staking1 from './img/staking-1.png';
import IMG_Staking2 from './img/staking-2.png';

import IMG_Inflation1 from './img/inflation-1.png';
import IMG_Inflation2 from './img/inflation-2.png';

import IMG_Ring from './img/ring.png';
import IMG_Kton from './img/kton.png';


function Home() {

  return (
    <>
      <Navbar classList="navbar-light bg-white" container="container" button="primary" />

      {/* WELCOME  */}
      <section data-jarallax data-speed=".8" className="pt-10 pb-11 py-md-14 overlay overlay-black overlay-60 jarallax" style={{backgroundImage: 'url(../img/covers/cover-4.jpg)'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/* Heading  */}
              <h1 className="display-2 fw-bold text-white">
                What Do You Need?
              </h1>

              {/* Text  */}
              <p className="lead text-white-75 mb-0">
                We're here to help you better use Landkit. First, let's figure out if we have a solution in our documentation.
              </p>

            </div>
          </div> {/* / .row  */}
        </div> {/* / .container  */}
      </section>

      {/* FLEXIBILITY  */}
    <section className="pt-8 pt-md-11 bg-gradient-light-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">

            {/* Badge  */}
            {/* <span className="badge rounded-pill bg-success-soft mb-3">
              <span className="h6 text-uppercase">Flexibility</span>
            </span> */}

            {/* Heading  */}
            <h1>
              Staking model
            </h1>

            {/* Text  */}
            <p className="fs-lg text-gray-700 mb-7 mb-md-9">
              The Darwinia Network will distribute RING as an incentive to the participants of Staking. The process of Staking can also be understood as the POS mining process, where the miner obtains Staking energy by pledging tokens for POS mining. According to complexity, Staking can be divided into basic and advanced versions.
            </p>

          </div>
        </div> {/* / .row  */}
        <div className="row">
          <div className="col-12 col-md-6" data-aos="fade-up">

            {/* Card  */}
            <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">

              {/* Image  */}
              <img src={IMG_Staking1} alt="..." className="card-img-top"/>

              {/* Shape  */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  {/* {{> curves/curve-1}} */}
                  <Curve1/>
                </div>
              </div>

              {/* Body  */}
              <div className="card-body position-relative">

                {/* Badge  */}
                <div className="position-relative text-end mt-n8 me-n4 mb-3">
                  <span className="badge rounded-pill bg-success">
                    <span className="h6 text-uppercase">Basic Model</span>
                  </span>
                </div>

                {/* Heading  */}
                <h3>
                  Shared Coworking
                </h3>

                {/* Text  */}
                <p className="text-muted">
                  Open seating is available weekdays from 7am - 7pm and weekends from 9am - 5pm.
                </p>

                {/* Link  */}
                <a href="#!" className="fw-bold text-decoration-none">
                  Read more <i className="fe fe-arrow-right ms-3"></i>
                </a>

              </div>

            </div>

          </div>
          <div className="col-12 col-md-6" data-aos="fade-up" data-aos-delay="100">

            {/* Card  */}
            <div className="card shadow-light-lg mb-6 mb-md-0 lift lift-lg">

              {/* Image  */}
              <img src={IMG_Staking2} alt="..." className="card-img-top"/>

              {/* Shape  */}
              <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                  {/* {{> curves/curve-1}} */}
                  <Curve1/>
                </div>
              </div>

              {/* Body  */}
              <div className="card-body position-relative">

                {/* Badge  */}
                <div className="position-relative text-end mt-n8 me-n4 mb-3">
                  <span className="badge rounded-pill bg-warning">
                    <span className="h6 text-uppercase">Advanced Model</span>
                  </span>
                </div>

                {/* Heading  */}
                <h3>
                  Designated Desk
                </h3>

                {/* Text  */}
                <p className="text-muted">
                  A personal space to leave your computer, monitor, and supplies with unlimited access.
                </p>

                {/* Link  */}
                <a href="#!" className="fw-bold text-decoration-none">
                  Read more <i className="fe fe-arrow-right ms-3"></i>
                </a>

              </div>

            </div>

          </div>

        </div> {/* / .row  */}
      </div> {/* / .container  */}
    </section>

    {/* Tokenomics */}
    <section className="pt-8 pt-md-11">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">

              {/* Badge  */}
              {/* <span className="badge rounded-pill bg-success-soft mb-3">
                <span className="h6 text-uppercase">Flexibility</span>
              </span> */}

              {/* Heading  */}
              <h1>
                Cross-chain tokens
              </h1>

              {/* Text  */}
              <p className="fs-lg text-gray-700 mb-7 mb-md-9">
                The Darwinia Network will distribute RING as an incentive to the participants of Staking. tive to the participants of Staking.
              </p>

            </div>
          </div> {/* / .row  */}

          <div className="row">
            <div className="col-12 col-lg-6 mb-4">
              <div className={`card ${styles.ringCard} d-flex flex-row text-white`}>
                <div className="card-body d-flex align-items-stretch">
                <div className="row">
                  <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                    <img src={IMG_Ring} width="56" class="rounded mx-auto d-block" alt="..." />
                    <h3 className="mt-4">RING</h3>
                  </div>
                  <div className="col-9 d-flex ">
                    <div className="row flex-column justify-content-between">
                      <div>
                        RING is the native token of Darwinia Network
                      </div>
                      <div>
                        <div className="d-flex flex-row justify-content-between">
                          <p className="mb-0">Max Supply</p>
                          <p className="mb-0">1,000,000,000</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <p className="mb-0">Circulating Supply</p>
                          <p className="mb-0">1,000,000,000</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <p className="mb-0">Total Supply</p>
                          <p className="mb-0">1,000,000,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 mb-4">
              <div className={`card ${styles.ktonCard} d-flex flex-row text-white`}>
                <div className="card-body d-flex align-items-stretch">
                <div className="row">
                  <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                    <img src={IMG_Kton} width="56" class="rounded mx-auto d-block" alt="..." />
                    <h3 className="mt-4">KTON</h3>
                  </div>
                  <div className="col-9 d-flex ">
                    <div className="row flex-column justify-content-between">
                      <div>
                        KTON is a derivative commitment token of RING, which encourages long-term involvement.
                      </div>
                      <div>
                        <div className="d-flex flex-row justify-content-between">
                          <p className="mb-0">Max Supply</p>
                          <p className="mb-0">1,000,000,000</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <p className="mb-0">Circulating Supply</p>
                          <p className="mb-0">1,000,000,000</p>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <p className="mb-0">Total Supply</p>
                          <p className="mb-0">1,000,000,000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">

          </div>
      </div>
    </section>


    {/* Inflation  */}
    <section className="py-8 py-md-11 mt-12 bg-gray-200">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 text-center">

            {/* Heading  */}
            <h2 className="fw-bold">
              RING Inflation Model
            </h2>

            {/* Text  */}
            <p className="fs-lg text-muted mb-7 mb-md-9">
              After the Darwinia Network mainnet goes live, the total cap of the block reward is adjusted once a year. The total number of hard-cap for RING is 10 billion. The following figure shows the RING’s inflation model.
            </p>

          </div>
        </div> {/* / .row  */}
        <div className="row">
          <div className="col-12 col-lg-6 d-lg-flex mb-4">

            {/* Card  */}
            <div className="card shadow-light-lg overflow-hidden" data-aos="fade-up">

              <img src={IMG_Inflation1} class="img-fluid" alt="..." />


            </div>

          </div>
          <div className="col-12 col-lg-6 d-lg-flex mb-4">

            {/* Card  */}
            <div className="card shadow-light-lg overflow-hidden text-center" data-aos="fade-up">

                <img src={IMG_Inflation2} class="img-fluid" alt="..." />

            </div>

          </div>
        </div> {/* / .row  */}
        <div className="row">
          <div className="col-12">
            <p class="text-center mt-4">Note: The block reward of year N is 1 - (99/100)^sqrt(N) of total remaining issuable</p>
          </div>
        </div> {/* / .row  */}
      </div> {/* / .container  */}
    </section>


    {/* ABOUT  */}
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 text-center">

            {/* Heading  */}
            <h2 className="fw-bold">
              Revenue Model
            </h2>

            {/* Text  */}
            <p className="fs-lg text-muted mb-7 mb-md-9">
              After the Darwinia Network mainnet goes live, the total cap of the block reward is adjusted once a year. The total number of hard-cap for RING is 10 billion. The following figure shows the RING’s inflation model.
            </p>

          </div>
        </div> {/* / .row  */}
        <div className="row gx-4">
          <div className="col-12 col-lg-6 d-lg-flex mb-4">

            {/* Card  */}
            <div className="card shadow-light-lg overflow-hidden justify-content-center" data-aos="fade-up">
              <div className="row">
                <div className="col-md-4 position-relative">

                  {/* Image  */}
                  <img src="../img/illustrations/illustration-8.png" className="h-75 position-absolute right-0 mt-7 me-n4" alt="..." />

                </div>
                <div className="col-md-8">

                  {/* Body  */}
                  <div className="card-body py-7 py-md-9 text-center">

                    {/* Heading  */}
                    <h4 className="fw-bold">
                      Network Expense
                    </h4>

                    {/* Text  */}
                    <p className="text-muted mb-0 text-start">
                      Validators’ Incentive (Inflation). <br/>
                    </p>

                    <p className="text-muted mb-0 text-start">
                      Fishermen’s Incentive from Adversaries’ Slash (self-sustain).
                    </p>

                  </div>

                </div>
              </div> {/* / .row  */}
            </div>

          </div>
          <div className="col-12 col-lg-6 d-lg-flex mb-4">

            {/* Card  */}
            <div className="card shadow-light-lg overflow-hidden text-center justify-content-center" data-aos="fade-up">
              <div className="row">
                <div className="col-md-8">

                  {/* Body  */}
                  <div className="card-body py-7 py-md-9">

                    {/* Heading  */}
                    <h4 className="fw-bold">
                      Emoji Responses
                    </h4>

                    {/* Text  */}
                    <p className="text-muted mb-0 text-start">
                      Cross-chain Asset Transfer Service Fee (per TX) as Revenue.<br/>
                      Verification Game Slash Tax as Revenue. <br/>
                      Revenue Pool is used to buy back RING and burn. <br/>
                    </p>

                  </div>

                </div>
                <div className="col-md-4">

                  {/* Image  */}
                  <img src="../img/illustrations/illustration-6.png" className="h-75 position-absolute left-0 mt-7" alt="..." />

                </div>
              </div> {/* / .row  */}
            </div>

          </div>
        </div> {/* / .row  */}
      </div> {/* / .container  */}

    </section>

    <Footer classList="bg-dark"/>

    </>
  );
}

export default Home;
