import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {OverlayPanel} from '../../components/overlaypanel/OverlayPanel';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class OverlayPanelDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>OverlayPanel</h1>
                        <p>OverlayPanel is a container component that can overlay other components on page.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("overlayPanel")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation" aria-controls="overlay_panel" aria-haspopup={true}>
                    <Button type="button" label="Toggle" onClick={(e) => this.op.toggle(e)}/>

                    <OverlayPanel ref={(el) => this.op = el} id="overlay_panel" showCloseIcon={true}>
                        <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
                    </OverlayPanel>
                </div>

                <OverlayPanelDoc></OverlayPanelDoc>
            </div>
        )
    }
}

export class OverlayPanelDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Button} from 'primereact/button';

export class OverlayPanelDemo extends Component {

    render() {
        return (
            <div>
                <Button type="button" label="Toggle" onClick={(e) => this.op.toggle(e)}/>

                <OverlayPanel ref={(el) => this.op = el} id="overlay_panel" showCloseIcon={true}>
                    <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
                </OverlayPanel>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useRef } from 'react';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Button} from 'primereact/button';

const OverlayPanelDemo = () => {
    let op = useRef(null);

    return (
        <div>
            <Button type="button" label="Toggle" onClick={(e) => op.current.toggle(e)}/>

            <OverlayPanel ref={op} id="overlay_panel" showCloseIcon={true}>
                <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
            </OverlayPanel>
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React, { useRef } from 'react';
import {OverlayPanel} from 'primereact/overlaypanel';
import {Button} from 'primereact/button';

const OverlayPanelDemo = () => {
    let op = useRef<any>(null);

    return (
        <div>
            <Button type="button" label="Toggle" onClick={(e) => op.current.toggle(e)}/>

            <OverlayPanel ref={op} id="overlay_panel" showCloseIcon={true}>
                <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
            </OverlayPanel>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/overlaypanel" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="OverlayPanelDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {OverlayPanel} from 'primereact/overlaypanel';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
<CodeHighlight className="language-jsx">
{`
<Button type="button" label="Basic" onClick={(e) => this.op.toggle(e)} />

<OverlayPanel ref={(el) => this.op = el}>
    <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
</OverlayPanel>

`}
</CodeHighlight>

            <h3>Dismissable and CloseIcon</h3>
            <p>Clicking outside the overlay hides the panel, setting dismissable to false disables this behavior.
               Additionally enablign showCloseIcon property displays a close icon at the top right corner to close the panel.</p>

<CodeHighlight className="language-jsx">
{`
<OverlayPanel ref={(el) => {this.op = el;}} showCloseIcon={true} dismissable={true}>
    <img src="showcase/resources/demo/images/galleria/galleria1.jpg" alt="Galleria 1" />
</OverlayPanel>

`}
</CodeHighlight>

            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>dismissable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Enables to hide the overlay when outside is clicked.</td>
                        </tr>
                        <tr>
                            <td>showCloseIcon</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays a close icon at top right corner.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>appendTo</td>
                            <td>DOM element</td>
                            <td>null</td>
                            <td>DOM element instance where the dialog should be mounted.</td>
                        </tr>
                        <tr>
                            <td>ariaCloseLabel</td>
                            <td>string</td>
                            <td>close</td>
                            <td>Aria label of the close icon.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onHide</td>
                            <td>-</td>
                            <td>Callback to invoke when overlay gets hidden.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Methods</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>toggle</td>
                            <td>event: Browser event</td>
                            <td>Toggles the visiblity of the overlay.</td>
                        </tr>
                        <tr>
                            <td>show</td>
                            <td>event: Browser event <br />
                                target: Optional target if event.target should not be used</td>
                            <td>Shows the overlay.</td>
                        </tr>
                        <tr>
                            <td>hide</td>
                            <td>-</td>
                            <td>Hides the overlay.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-overlaypanel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-overlaypanel-content</td>
                            <td>Content of the panel.</td>
                        </tr>
                        <tr>
                            <td>p-overlaypanel-close</td>
                            <td>Close icon.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
