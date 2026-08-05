import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="elementor elementor-26 elementor-location-header">
      <header className="elementor-element elementor-element-bbfbc92 sticky-header elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent e-lazyloaded elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects" data-settings="{&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;laptop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_effects_offset&quot;:90,&quot;sticky_offset&quot;:0,&quot;sticky_anchor_link_offset&quot;:0}">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-86b5b0d this-logo-sticky elementor-widget elementor-widget-image" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <Link href="/" style={{"fontSize":"16px"}}>
                <Image src="/images/27be6d13936a8bc6dbcfb656bcd95b80.webp" alt="District-Behavioral-Health-Group-Big-Logo-Size" width={840} height={259} className="attachment-full size-full wp-image-430" />
              </Link>
            </div>
          </div>
          <div className="elementor-element elementor-element-31ff910 elementor-widget elementor-widget-shortcode" data-widget_type="shortcode.default">
            <div className="elementor-widget-container">
              <div className="elementor-shortcode">
                <nav id="dbh-primary-nav" className="dbh-nav">
                  <ul id="menu-mega-menu-district-behavioral-health" className="dbh-nav__list">
                    <li className="dbh-nav__item has-mega-menu" style={{"fontSize":"16px"}}>
                      <a className="dbh-nav__link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="mm-panel-104566" style={{"fontSize":"15px"}}>
                        About
                        <span className="dbh-nav__caret" aria-hidden="true" style={{"fontSize":"15px"}}>
                          <svg width={10} height={6} viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                      <div className="dbh-mega-panel" role="region" aria-hidden="true" id="mm-panel-104566">
                        <div className="dbh-mega-panel__inner">
                          <div className="dbh-mega-sidebar">
                            <button className="dbh-mega-tab is-active" data-tab="mega-group-104567" type="button" role="tab" aria-selected="true" aria-controls="mega-group-104567">
                              About Us
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-104571" type="button" role="tab" aria-selected="false" aria-controls="mega-group-104571">
                              Community
                            </button>
                          </div>
                          <div className="dbh-mega-panel-body">
                            <div className="dbh-mega-content is-active dbh-mega-content--image" id="mega-group-104567" role="tabpanel" aria-hidden="false">
                              <h3 className="dbh-mega-content__heading" style={{"fontSize":"22px"}}>
                                Who We Are
                              </h3>
                              <div className="dbh-mega-cards dbh-mega-cards--image">
                                <Link className="dbh-mega-card dbh-mega-card--image" href="/meet-the-team/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__img-wrap">
                                    <Image src="/images/c01e1f4c99890a94c3046d006807cae3.webp" alt="Meet The Team" width={280} height={180} />
                                  </div>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Meet The Team
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Our family is your family. We have brought the absolute best to guide you.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card dbh-mega-card--image" href="/our-facilities/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__img-wrap">
                                    <Image src="/images/25c8bb1f470a97edbc99d9e418bf249d.webp" alt="Tour The Center" width={280} height={180} />
                                  </div>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Tour The Center
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Bright, cozy, and inviting: Our beautifully designed space is open.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--image" id="mega-group-104571" role="tabpanel" aria-hidden="true">
                              <h3 className="dbh-mega-content__heading" style={{"fontSize":"22px"}}>
                                Learn More About Us
                              </h3>
                              <div className="dbh-mega-cards dbh-mega-cards--image">
                                <Link className="dbh-mega-card" href="/location-served/usa/sober-living/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Sober Living
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Transition smoothly back into everyday independent life.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/pet-friendly-rehab/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Pet Friendly Facilities
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Keep your supportive animal companion nearby.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/couples-rehab/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Couples Rehab
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Heal your relationship while finding individual sobriety.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dbh-nav__item has-mega-menu" style={{"fontSize":"16px"}}>
                      <a className="dbh-nav__link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="mm-panel-104576" style={{"fontSize":"15px"}}>
                        Addiction Programs
                        <span className="dbh-nav__caret" aria-hidden="true" style={{"fontSize":"15px"}}>
                          <svg width={10} height={6} viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                      <div className="dbh-mega-panel" role="region" aria-hidden="true" id="mm-panel-104576">
                        <div className="dbh-mega-panel__inner">
                          <div className="dbh-mega-sidebar">
                            <button className="dbh-mega-tab is-active" data-tab="mega-group-104591" type="button" role="tab" aria-selected="true" aria-controls="mega-group-104591">
                              Addiction Recovery
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-104592" type="button" role="tab" aria-selected="false" aria-controls="mega-group-104592">
                              Addiction Rehab
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-104593" type="button" role="tab" aria-selected="false" aria-controls="mega-group-104593">
                              What We Treat
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-104878" type="button" role="tab" aria-selected="false" aria-controls="mega-group-104878">
                              Treatment Phases
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-104882" type="button" role="tab" aria-selected="false" aria-controls="mega-group-104882">
                              Treatment Modalities
                            </button>
                          </div>
                          <div className="dbh-mega-panel-body">
                            <div className="dbh-mega-content is-active dbh-mega-content--image" id="mega-group-104591" role="tabpanel" aria-hidden="false">
                              <h3 className="dbh-mega-content__heading" style={{"fontSize":"22px"}}>
                                What You Need to Know About
                              </h3>
                              <div className="dbh-mega-cards dbh-mega-cards--image">
                                <Link className="dbh-mega-card dbh-mega-card--image" href="/rehab-admission/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__img-wrap">
                                    <Image src="/images/461591f9460961b4fbb63836b7509ab3.webp" alt="Admission Process" width={280} height={180} />
                                  </div>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Admission Process
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Learn what to expect during our simple intake and evaluation steps.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--image" id="mega-group-104592" role="tabpanel" aria-hidden="true">
                              <div className="dbh-mega-cards dbh-mega-cards--image">
                                <Link className="dbh-mega-card" href="/location-served/usa/drug-rehab/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Drug Rehab
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Compassionate care for substance addiction.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/alcohol/addiction/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Alcohol Rehab
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Professional support for sustainable sobriety.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--columns" id="mega-group-104593" role="tabpanel" aria-hidden="true">
                              <div className="dbh-mega-cards dbh-mega-cards--columns">
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}>
                                    Substance Addictions
                                  </p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/alcohol/addiction/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Alcohol Addiction
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/opioids-addiction-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Opioid Addiction
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/meth-addiction-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Meth Addiction
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/cocaine-addiction-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Cocaine Addiction
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/marijuana-addiction-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Marijuana Addiction
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/xanax-addiction-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Xanax Addiction
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/fentanyl-addiction-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Fentanyl Addiction
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--image" id="mega-group-104878" role="tabpanel" aria-hidden="true">
                              <h3 className="dbh-mega-content__heading" style={{"fontSize":"22px"}}>
                                Each Phase Targets Immediate Needs
                              </h3>
                              <div className="dbh-mega-cards dbh-mega-cards--image">
                                <Link className="dbh-mega-card" href="/location-served/usa/medical-detox/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Detox
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Safe medical clearance and stabilization.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/residential-substance-use/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Residential Inpatient
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Comprehensive, 24-hour structured care.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/iop-drug-rehab/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Intensive Outpatient Program
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Flexible treatment with therapy sessions.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/php-drug-rehab/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Partial Hospitalization
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Intensive daily treatment while living at home.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/outpatient-drug-rehab/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Outpatient
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Continued group support and therapy.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--columns" id="mega-group-104882" role="tabpanel" aria-hidden="true">
                              <div className="dbh-mega-cards dbh-mega-cards--columns">
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}>
                                    Types of Therapy
                                  </p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/dual-diagnosis-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Dual Diagnosis
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/dbt-therapy/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        DBT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/act/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        ACT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/mat-therapy/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        MAT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/motivational/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Motivational Interviewing
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/ifs/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        IFS
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/cpt/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        CPT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}></p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/cbt-therapy/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        CBT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/emdr-therapy/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        EMDR
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/family/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Family Counseling
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <a className="dbh-mega-card" href="#" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Individual Therapy
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </a>
                                  <Link className="dbh-mega-card" href="/location-served/usa/trauma/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Trauma Informed
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/psycho-dynamic/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Psychodynamic Therapy
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dbh-mega-blogs">
                            <p className="dbh-mega-blogs__heading" style={{"fontSize":"14px"}}>
                              Featured Blogs
                            </p>
                            <Link className="dbh-mega-blog-item" href="/location-served/usa/adderall-addiction-treatment/how-long-in-your-system/" style={{"fontSize":"16px"}}>
                              <div className="dbh-mega-blog-item__thumb">
                                <Image src="/wp-content/uploads/2026/01/featured-placeholder-bg.png" alt="Adderall/How long in your system" width={80} height={60} />
                              </div>
                              <div className="dbh-mega-blog-item__text">
                                <span className="dbh-mega-blog-item__title" style={{"fontSize":"13px"}}>
                                  Adderall/How long in your system
                                </span>
                                <span className="dbh-mega-blog-item__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </span>
                              </div>
                            </Link>
                            <Link className="dbh-mega-blog-item" href="/location-served/usa/adderall-addiction-treatment/withdrawal/" style={{"fontSize":"16px"}}>
                              <div className="dbh-mega-blog-item__thumb">
                                <Image src="/wp-content/uploads/2026/01/featured-placeholder-bg.png" alt="Adderall/Withdrawal (DrugUse Blog National)" width={80} height={60} />
                              </div>
                              <div className="dbh-mega-blog-item__text">
                                <span className="dbh-mega-blog-item__title" style={{"fontSize":"13px"}}>
                                  Adderall/Withdrawal (DrugUse Blog National)
                                </span>
                                <span className="dbh-mega-blog-item__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </span>
                              </div>
                            </Link>
                            <Link className="dbh-mega-blog-item" href="/location-served/usa/alcohol/addiction/" style={{"fontSize":"16px"}}>
                              <div className="dbh-mega-blog-item__thumb">
                                <Image src="/wp-content/uploads/2026/01/featured-placeholder-bg.png" alt="Alcohol/Addiction (DrugUse Blog National)" width={80} height={60} />
                              </div>
                              <div className="dbh-mega-blog-item__text">
                                <span className="dbh-mega-blog-item__title" style={{"fontSize":"13px"}}>
                                  Alcohol/Addiction (DrugUse Blog National)
                                </span>
                                <span className="dbh-mega-blog-item__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dbh-nav__item has-mega-menu" style={{"fontSize":"16px"}}>
                      <a className="dbh-nav__link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="mm-panel-104837" style={{"fontSize":"15px"}}>
                        Mental Health
                        <span className="dbh-nav__caret" aria-hidden="true" style={{"fontSize":"15px"}}>
                          <svg width={10} height={6} viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                      <div className="dbh-mega-panel" role="region" aria-hidden="true" id="mm-panel-104837">
                        <div className="dbh-mega-panel__inner">
                          <div className="dbh-mega-sidebar">
                            <button className="dbh-mega-tab is-active" data-tab="mega-group-104838" type="button" role="tab" aria-selected="true" aria-controls="mega-group-104838">
                              Mental Wellness
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-104848" type="button" role="tab" aria-selected="false" aria-controls="mega-group-104848">
                              Types of Disorders
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-104854" type="button" role="tab" aria-selected="false" aria-controls="mega-group-104854">
                              Disorders we treat
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-108063" type="button" role="tab" aria-selected="false" aria-controls="mega-group-108063">
                              Treatment Modalities
                            </button>
                          </div>
                          <div className="dbh-mega-panel-body">
                            <div className="dbh-mega-content is-active dbh-mega-content--image" id="mega-group-104838" role="tabpanel" aria-hidden="false">
                              <h3 className="dbh-mega-content__heading" style={{"fontSize":"22px"}}>
                                What You Need to Know About
                              </h3>
                              <div className="dbh-mega-cards dbh-mega-cards--image">
                                <Link className="dbh-mega-card dbh-mega-card--image" href="/location-served/usa/mental-health/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__img-wrap">
                                    <Image src="/images/a886860a2df42a2bc47aede51230d5dc.webp" alt="What is Mental Health Treatment" width={280} height={180} />
                                  </div>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      What is Mental Health Treatment
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Specialized care for overall emotional wellness.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--image" id="mega-group-104848" role="tabpanel" aria-hidden="true">
                              <div className="dbh-mega-cards dbh-mega-cards--image">
                                <Link className="dbh-mega-card" href="/location-served/usa/personality-disorder/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Personality
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Pervasive, ingrained patterns of thinking, feeling, and behaving.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/trauma/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Trauma
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Emotional responses triggered by deeply distressing or painful events.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/anxiety/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Anxiety
                                    </span>
                                    <span className="dbh-mega-card__excerpt" style={{"fontSize":"12px"}}>
                                      Intense feelings of worry or fear impacting daily routines.
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/ca/neurodevelopment-disorder/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Neurodevelopmental Disorders
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--columns" id="mega-group-104854" role="tabpanel" aria-hidden="true">
                              <div className="dbh-mega-cards dbh-mega-cards--columns">
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}>
                                    Anxiety Disorders Treatment
                                  </p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/gad/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Generalized Anxiety Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/agoraphobia-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Agoraphobia Disorder Treatment
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/social/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Social Anxiety Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/panic-disorder/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Panic Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/obsessive-compulsive/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Obsessive-Compulsive Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}>
                                    Mood Disorders Treatment
                                  </p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/mood-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Mood Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/depression/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Depression
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/bipolar/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Bipolar Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/persistent-depressive-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Persistent Depressive Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/seasonal-affective-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Seasonal Affective Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/premenstrual-dysphoric-disorder/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Premenstural Dysphoric Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/disruptive-mood-dysregulation-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Disruptive Mood Dysregulation
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}>
                                    Personality & Behavioral Disorders Treatment
                                  </p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/borderline-personality-disorder/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Borderline Personality Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/antisocial-persnonality/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Antisocial Personality Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/adhd/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        ADHD Treatment
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/major-depressive-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Major Depressive Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/adjustment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Adjustment Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}>
                                    Psychotic Disorders Treatment
                                  </p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/psychotic-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Psychotic Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/schizophrenia/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Schizophrenia
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/schizoaffective-disorder/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Schizoaffective Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/delusional-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Delusional Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/brief-psychotic-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Brief Psychotic Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/substance-induced-psychotic-disorder-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Substance-Induced Psychotic Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/paraphrenia-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Paraphrenia Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}>
                                    Trauma Disorders Treatment
                                  </p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/ptsd/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        PTSD
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/acute-stress-disorder/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Acute Stress Disorder
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--columns" id="mega-group-108063" role="tabpanel" aria-hidden="true">
                              <div className="dbh-mega-cards dbh-mega-cards--columns">
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}>
                                    How We Treat Mental Health
                                  </p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/dual-diagnosis-treatment/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Dual Diagnosis
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/dbt-therapy/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        DBT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/act/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        ACT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/mat-therapy/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        MAT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/motivational/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Motivational Interviewing
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/ifs/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        IFS
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/cpt/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        CPT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                                <div className="dbh-mega-col">
                                  <p className="dbh-mega-col__heading" style={{"fontSize":"14px"}}></p>
                                  <Link className="dbh-mega-card" href="/location-served/usa/cbt-therapy/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        CBT
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/emdr-therapy/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        EMDR
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/family/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Family Counseling
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <a className="dbh-mega-card" href="#" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Individual Therapy
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </a>
                                  <Link className="dbh-mega-card" href="/location-served/usa/trauma/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Trauma Informed
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                  <Link className="dbh-mega-card" href="/location-served/usa/psycho-dynamic/" style={{"fontSize":"16px"}}>
                                    <div className="dbh-mega-card__body">
                                      <span className="dbh-mega-card__title" style={{"fontSize":"13px"}}>
                                        Psychodynamic Therapy
                                      </span>
                                      <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dbh-mega-blogs">
                            <p className="dbh-mega-blogs__heading" style={{"fontSize":"14px"}}>
                              Featured Blogs
                            </p>
                            <Link className="dbh-mega-blog-item" href="/location-served/usa/ativan-lorazepam/how-long-in-your-system/" style={{"fontSize":"16px"}}>
                              <div className="dbh-mega-blog-item__thumb">
                                <Image src="/wp-content/uploads/2026/01/featured-placeholder-bg.png" alt="Ativan (Lorazepam)/ How long in your system" width={80} height={60} />
                              </div>
                              <div className="dbh-mega-blog-item__text">
                                <span className="dbh-mega-blog-item__title" style={{"fontSize":"13px"}}>
                                  Ativan (Lorazepam)/ How long in your...
                                </span>
                                <span className="dbh-mega-blog-item__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </span>
                              </div>
                            </Link>
                            <Link className="dbh-mega-blog-item" href="/location-served/usa/adderall-addiction-treatment/how-long-in-your-system/" style={{"fontSize":"16px"}}>
                              <div className="dbh-mega-blog-item__thumb">
                                <Image src="/wp-content/uploads/2026/01/featured-placeholder-bg.png" alt="Adderall/How long in your system" width={80} height={60} />
                              </div>
                              <div className="dbh-mega-blog-item__text">
                                <span className="dbh-mega-blog-item__title" style={{"fontSize":"13px"}}>
                                  Adderall/How long in your system
                                </span>
                                <span className="dbh-mega-blog-item__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </span>
                              </div>
                            </Link>
                            <Link className="dbh-mega-blog-item" href="/location-served/usa/alcohol/how-long-in-your-system/" style={{"fontSize":"16px"}}>
                              <div className="dbh-mega-blog-item__thumb">
                                <Image src="/wp-content/uploads/2026/01/featured-placeholder-bg.png" alt="Alcohol/how long in your system" width={80} height={60} />
                              </div>
                              <div className="dbh-mega-blog-item__text">
                                <span className="dbh-mega-blog-item__title" style={{"fontSize":"13px"}}>
                                  Alcohol/how long in your system
                                </span>
                                <span className="dbh-mega-blog-item__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                  <svg width={16} height={16} viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  </svg>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dbh-nav__item has-mega-menu" style={{"fontSize":"16px"}}>
                      <a className="dbh-nav__link" href="#" aria-haspopup="true" aria-expanded="false" aria-controls="mm-panel-108075" style={{"fontSize":"15px"}}>
                        Resources
                        <span className="dbh-nav__caret" aria-hidden="true" style={{"fontSize":"15px"}}>
                          <svg width={10} height={6} viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </span>
                      </a>
                      <div className="dbh-mega-panel" role="region" aria-hidden="true" id="mm-panel-108075">
                        <div className="dbh-mega-panel__inner">
                          <div className="dbh-mega-sidebar">
                            <button className="dbh-mega-tab is-active" data-tab="mega-group-108076" type="button" role="tab" aria-selected="true" aria-controls="mega-group-108076">
                              Tests
                            </button>
                            <button className="dbh-mega-tab" data-tab="mega-group-108083" type="button" role="tab" aria-selected="false" aria-controls="mega-group-108083">
                              Drugs
                            </button>
                          </div>
                          <div className="dbh-mega-panel-body">
                            <div className="dbh-mega-content is-active dbh-mega-content--plain" id="mega-group-108076" role="tabpanel" aria-hidden="false">
                              <h3 className="dbh-mega-content__heading" style={{"fontSize":"22px"}}>
                                Self-Assessments
                              </h3>
                              <div className="dbh-mega-cards dbh-mega-cards--plain">
                                <Link className="dbh-mega-card" href="/quiz/bipolar-disorder/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Bipolar Disorder Test
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/quiz/bipolar-disorder-dsm5/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      DSM-5 for Bipolar Disorder
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/quiz/ptsd-checklist-civilian/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      PTSD Test
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/quiz/anxiety-worry-7/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Anxiety Test
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/quiz/am-i-addicted" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Addiction Test
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/quiz/am-i-alcoholic" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Alcohol Test
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/quiz/generalized-anxiety-disorder-screening/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Generalized Anxiety Disorder Test
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="dbh-mega-content dbh-mega-content--plain" id="mega-group-108083" role="tabpanel" aria-hidden="true">
                              <h3 className="dbh-mega-content__heading" style={{"fontSize":"22px"}}>
                                Drug Index
                              </h3>
                              <div className="dbh-mega-cards dbh-mega-cards--plain">
                                <Link className="dbh-mega-card" href="/location-served/usa/adderall-addiction-treatment/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Adderal
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/ativan-addiction-treatment/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Ativan
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/bath-salts-addiction-treatment/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Bath Salts
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/crack-cocaine/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Crack Cocaine
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/fentanyl-addiction-treatment/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Fentanyl
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/heroin-addiction-treatment/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Heroin
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/ketamine-addiction-treatment/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Ketamine
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/opioids-addiction-treatment/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Opioid
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                                <Link className="dbh-mega-card" href="/location-served/usa/xanax-addiction-treatment/" style={{"fontSize":"16px"}}>
                                  <div className="dbh-mega-card__body">
                                    <span className="dbh-mega-card__title" style={{"fontSize":"14px"}}>
                                      Xanax
                                    </span>
                                    <span className="dbh-mega-card__arrow" aria-hidden="true" style={{"fontSize":"16px"}}>
                                      <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#006CAE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                      </svg>
                                    </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dbh-nav__item" style={{"fontSize":"16px"}}>
                      <Link className="dbh-nav__link" href="/blogs/" style={{"fontSize":"15px"}}>
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-0030369 elementor-align-right menu-cta elementor-widget elementor-widget-button" data-widget_type="button.default">
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <Link className="elementor-button elementor-button-link elementor-size-sm" href="tel:888-707-6073" style={{"fontSize":"16px"}}>
                  <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                    <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                      (888) 707-6073
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="elementor-section elementor-top-section elementor-element elementor-element-2427782 elementor-hidden-desktop sticky-header elementor-section-content-middle elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky_effects_offset&quot;:100,&quot;sticky_offset_mobile&quot;:0,&quot;sticky_effects_offset_mobile&quot;:5,&quot;sticky_anchor_link_offset_mobile&quot;:60,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_anchor_link_offset&quot;:0}">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-589db17">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-ede5212 this-logo-sticky elementor-widget elementor-widget-image" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <Link href="/" style={{"fontSize":"16px"}}>
                    <Image src="/images/27be6d13936a8bc6dbcfb656bcd95b80.webp" alt="District-Behavioral-Health-Group-Big-Logo-Size" width={840} height={259} className="attachment-full size-full wp-image-430" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-819cba6">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-dc5d096 menu-cta elementor-hidden-mobile elementor-align-right elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link className="elementor-button elementor-button-link elementor-size-sm" href="/contact" style={{"fontSize":"16px"}}>
                      <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                        <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                          Contact Us
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ac2e9fe">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-ea9b3f3 menu-cta elementor-view-default elementor-widget elementor-widget-icon" data-widget_type="icon.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <a className="elementor-icon" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjE4MjEiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D" style={{"fontSize":"50px"}}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-bars" viewBox="0 0 448 512">
                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="elementor-section elementor-top-section elementor-element elementor-element-6e615ec elementor-hidden-desktop sticky-header elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky_effects_offset&quot;:100,&quot;sticky_offset_mobile&quot;:0,&quot;sticky_effects_offset_mobile&quot;:5,&quot;sticky_anchor_link_offset_mobile&quot;:60,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_anchor_link_offset&quot;:0}">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6468fc2">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-d70e0ec this-logo-sticky elementor-widget elementor-widget-image" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <Link href="/" style={{"fontSize":"16px"}}>
                    <Image src="/images/27be6d13936a8bc6dbcfb656bcd95b80.webp" alt="District-Behavioral-Health-Group-Big-Logo-Size" width={840} height={259} className="attachment-full size-full wp-image-430" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-7693640">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-21a23f0 menu-cta elementor-hidden-mobile elementor-align-right elementor-widget elementor-widget-button" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link className="elementor-button elementor-button-link elementor-size-sm" href="/contact" style={{"fontSize":"16px"}}>
                      <span className="elementor-button-content-wrapper" style={{"fontSize":"16px"}}>
                        <span className="elementor-button-text" style={{"fontSize":"16px"}}>
                          Contact Us
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-788e046">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-18e5587 menu-cta elementor-view-default elementor-widget elementor-widget-icon" data-widget_type="icon.default">
                <div className="elementor-widget-container">
                  <div className="elementor-icon-wrapper">
                    <a className="elementor-icon" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjEwNDkxMyIsInRvZ2dsZSI6ZmFsc2V9" style={{"fontSize":"50px"}}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-bars" viewBox="0 0 448 512">
                        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </header>
  );
}
