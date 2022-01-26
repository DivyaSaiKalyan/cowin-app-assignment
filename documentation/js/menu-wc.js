'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">cowin-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-635ac6e6b6f6b929c03ef53039f9d8152bf3d6b58a723a44a848d3c14f6d1b240f54050933cae0753897def446fba5dcd6166746efb51f24dcd2874492855690"' : 'data-target="#xs-controllers-links-module-AppModule-635ac6e6b6f6b929c03ef53039f9d8152bf3d6b58a723a44a848d3c14f6d1b240f54050933cae0753897def446fba5dcd6166746efb51f24dcd2874492855690"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-635ac6e6b6f6b929c03ef53039f9d8152bf3d6b58a723a44a848d3c14f6d1b240f54050933cae0753897def446fba5dcd6166746efb51f24dcd2874492855690"' :
                                            'id="xs-controllers-links-module-AppModule-635ac6e6b6f6b929c03ef53039f9d8152bf3d6b58a723a44a848d3c14f6d1b240f54050933cae0753897def446fba5dcd6166746efb51f24dcd2874492855690"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-635ac6e6b6f6b929c03ef53039f9d8152bf3d6b58a723a44a848d3c14f6d1b240f54050933cae0753897def446fba5dcd6166746efb51f24dcd2874492855690"' : 'data-target="#xs-injectables-links-module-AppModule-635ac6e6b6f6b929c03ef53039f9d8152bf3d6b58a723a44a848d3c14f6d1b240f54050933cae0753897def446fba5dcd6166746efb51f24dcd2874492855690"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-635ac6e6b6f6b929c03ef53039f9d8152bf3d6b58a723a44a848d3c14f6d1b240f54050933cae0753897def446fba5dcd6166746efb51f24dcd2874492855690"' :
                                        'id="xs-injectables-links-module-AppModule-635ac6e6b6f6b929c03ef53039f9d8152bf3d6b58a723a44a848d3c14f6d1b240f54050933cae0753897def446fba5dcd6166746efb51f24dcd2874492855690"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-d7f1209969ece38d08c9f025bc8a38384534fee868de978c3a901255ffa9fec31a78cd2cb60acc8df15e71b4197664b6bb213906d5ff617542e39519075faba7"' : 'data-target="#xs-controllers-links-module-UserModule-d7f1209969ece38d08c9f025bc8a38384534fee868de978c3a901255ffa9fec31a78cd2cb60acc8df15e71b4197664b6bb213906d5ff617542e39519075faba7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-d7f1209969ece38d08c9f025bc8a38384534fee868de978c3a901255ffa9fec31a78cd2cb60acc8df15e71b4197664b6bb213906d5ff617542e39519075faba7"' :
                                            'id="xs-controllers-links-module-UserModule-d7f1209969ece38d08c9f025bc8a38384534fee868de978c3a901255ffa9fec31a78cd2cb60acc8df15e71b4197664b6bb213906d5ff617542e39519075faba7"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-d7f1209969ece38d08c9f025bc8a38384534fee868de978c3a901255ffa9fec31a78cd2cb60acc8df15e71b4197664b6bb213906d5ff617542e39519075faba7"' : 'data-target="#xs-injectables-links-module-UserModule-d7f1209969ece38d08c9f025bc8a38384534fee868de978c3a901255ffa9fec31a78cd2cb60acc8df15e71b4197664b6bb213906d5ff617542e39519075faba7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-d7f1209969ece38d08c9f025bc8a38384534fee868de978c3a901255ffa9fec31a78cd2cb60acc8df15e71b4197664b6bb213906d5ff617542e39519075faba7"' :
                                        'id="xs-injectables-links-module-UserModule-d7f1209969ece38d08c9f025bc8a38384534fee868de978c3a901255ffa9fec31a78cd2cb60acc8df15e71b4197664b6bb213906d5ff617542e39519075faba7"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VaccineDataModule.html" data-type="entity-link" >VaccineDataModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VaccineDataModule-6c4ac87e7106d2dfd9f3201d3de80c8e80a80ffe778e36358870293db58a14640afdd35e1f833f9e83a7ef28f6ae58165a9c67e0adf6df3763de7f73f15a8dfb"' : 'data-target="#xs-controllers-links-module-VaccineDataModule-6c4ac87e7106d2dfd9f3201d3de80c8e80a80ffe778e36358870293db58a14640afdd35e1f833f9e83a7ef28f6ae58165a9c67e0adf6df3763de7f73f15a8dfb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VaccineDataModule-6c4ac87e7106d2dfd9f3201d3de80c8e80a80ffe778e36358870293db58a14640afdd35e1f833f9e83a7ef28f6ae58165a9c67e0adf6df3763de7f73f15a8dfb"' :
                                            'id="xs-controllers-links-module-VaccineDataModule-6c4ac87e7106d2dfd9f3201d3de80c8e80a80ffe778e36358870293db58a14640afdd35e1f833f9e83a7ef28f6ae58165a9c67e0adf6df3763de7f73f15a8dfb"' }>
                                            <li class="link">
                                                <a href="controllers/VaccineDataController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineDataController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VaccineDataModule-6c4ac87e7106d2dfd9f3201d3de80c8e80a80ffe778e36358870293db58a14640afdd35e1f833f9e83a7ef28f6ae58165a9c67e0adf6df3763de7f73f15a8dfb"' : 'data-target="#xs-injectables-links-module-VaccineDataModule-6c4ac87e7106d2dfd9f3201d3de80c8e80a80ffe778e36358870293db58a14640afdd35e1f833f9e83a7ef28f6ae58165a9c67e0adf6df3763de7f73f15a8dfb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VaccineDataModule-6c4ac87e7106d2dfd9f3201d3de80c8e80a80ffe778e36358870293db58a14640afdd35e1f833f9e83a7ef28f6ae58165a9c67e0adf6df3763de7f73f15a8dfb"' :
                                        'id="xs-injectables-links-module-VaccineDataModule-6c4ac87e7106d2dfd9f3201d3de80c8e80a80ffe778e36358870293db58a14640afdd35e1f833f9e83a7ef28f6ae58165a9c67e0adf6df3763de7f73f15a8dfb"' }>
                                        <li class="link">
                                            <a href="injectables/FindUser.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindUser</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FindVaccineName.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FindVaccineName</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VaccineDataService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineDataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VaccineNameModule.html" data-type="entity-link" >VaccineNameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VaccineNameModule-36047eaec85ba95c2a5be6fe5c252cad26e44c4f224e1fd0c9716220bfea8b4490171007ecdce8838249e9f4bc294c2e69331282d1875800b6642ef6eb60f5b5"' : 'data-target="#xs-controllers-links-module-VaccineNameModule-36047eaec85ba95c2a5be6fe5c252cad26e44c4f224e1fd0c9716220bfea8b4490171007ecdce8838249e9f4bc294c2e69331282d1875800b6642ef6eb60f5b5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VaccineNameModule-36047eaec85ba95c2a5be6fe5c252cad26e44c4f224e1fd0c9716220bfea8b4490171007ecdce8838249e9f4bc294c2e69331282d1875800b6642ef6eb60f5b5"' :
                                            'id="xs-controllers-links-module-VaccineNameModule-36047eaec85ba95c2a5be6fe5c252cad26e44c4f224e1fd0c9716220bfea8b4490171007ecdce8838249e9f4bc294c2e69331282d1875800b6642ef6eb60f5b5"' }>
                                            <li class="link">
                                                <a href="controllers/VaccineNameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineNameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VaccineNameModule-36047eaec85ba95c2a5be6fe5c252cad26e44c4f224e1fd0c9716220bfea8b4490171007ecdce8838249e9f4bc294c2e69331282d1875800b6642ef6eb60f5b5"' : 'data-target="#xs-injectables-links-module-VaccineNameModule-36047eaec85ba95c2a5be6fe5c252cad26e44c4f224e1fd0c9716220bfea8b4490171007ecdce8838249e9f4bc294c2e69331282d1875800b6642ef6eb60f5b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VaccineNameModule-36047eaec85ba95c2a5be6fe5c252cad26e44c4f224e1fd0c9716220bfea8b4490171007ecdce8838249e9f4bc294c2e69331282d1875800b6642ef6eb60f5b5"' :
                                        'id="xs-injectables-links-module-VaccineNameModule-36047eaec85ba95c2a5be6fe5c252cad26e44c4f224e1fd0c9716220bfea8b4490171007ecdce8838249e9f4bc294c2e69331282d1875800b6642ef6eb60f5b5"' }>
                                        <li class="link">
                                            <a href="injectables/VaccineNameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VaccineNameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VaccineDataController.html" data-type="entity-link" >VaccineDataController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VaccineNameController.html" data-type="entity-link" >VaccineNameController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                                <li class="link">
                                    <a href="entities/VaccineData.html" data-type="entity-link" >VaccineData</a>
                                </li>
                                <li class="link">
                                    <a href="entities/VaccineNames.html" data-type="entity-link" >VaccineNames</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtServiceClass.html" data-type="entity-link" >JwtServiceClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/MaintainanceEntity.html" data-type="entity-link" >MaintainanceEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TypeOrmInterface.html" data-type="entity-link" >TypeOrmInterface</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindUser.html" data-type="entity-link" >FindUser</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FindVaccineName.html" data-type="entity-link" >FindVaccineName</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaccineDataService.html" data-type="entity-link" >VaccineDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VaccineNameService.html" data-type="entity-link" >VaccineNameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SwaggerConfig.html" data-type="entity-link" >SwaggerConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});