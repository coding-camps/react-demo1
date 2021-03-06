import React from "react";
import PageLayout from "../comps/common/pagelayout";
import Testblock from "../comps/common/testblock";
import DemoProps from "../comps/app1/sayhello";
import ColorUpdater from "../comps/app1/colorupdater";
import Clock from "../comps/app1/clock";
import Numcounter from "../comps/app1/numcounter";
import Markbtn from "../comps/app1/markbtn";
import Comm1PC from "../comps/app1/comm1PC";
import Comm2CP from "../comps/app1/comm2CP";
import Comm3CC from "../comps/app1/comm3CC";
import Commx from "../comps/app1/commx";
import Commy from "../comps/app1/commy";
import Commz from "../comps/app1/commz";
import LifecycleC1 from "../comps/app1/lifecycleC1";
import LifecycleC2 from "../comps/app1/lifecycleC2";
import LifecycleC3 from "../comps/app1/lifecycleC3";
import LifeCycleFull from "../comps/app1/lifecycleFull";
import NumCounter2 from "../comps/app1/numcounter2";
import Login from "../comps/app1/login";

function App1() {
    return (
        <PageLayout titles={["App1", "understand basic conceptions"]}>
            <Testblock blockName="props">
                <DemoProps/>
            </Testblock>

            <Testblock blockName={"state"}>
                <ColorUpdater/>
            </Testblock>

            <Testblock blockName={"component life"}>
                <Clock/>
            </Testblock>

            <Testblock blockName="out link">
                <a href="https://www.baidu.com">baidu</a> baidu
            </Testblock>

            <Testblock blockName="counter">
                <Numcounter/>
            </Testblock>

            <Testblock blockName={"markdown: fetch, props"}>
                <Markbtn/>
            </Testblock>

            <Testblock blockName={"communication: parent -> child: (by class and function)"}>
                <Testblock blockName={"communication: parent -> child"}>
                    <Comm1PC/>
                </Testblock>
                <Testblock blockName={"communication: 父更新子"}>
                    <Commx/>
                </Testblock>
            </Testblock>

            <Testblock blockName={"communication: child -> parent: (by class and function)"}>
                <Comm2CP/>
            </Testblock>

            <Testblock blockName={"communication: child1 -> child2, child3: (by class and function)"}>
                <Comm3CC/>
            </Testblock>

            <Testblock blockName={"communication: 子更新父"}>
                <Commy/>
            </Testblock>
            <Testblock blockName={"communication: 兄弟间通信"}>
                <Commz/>
            </Testblock>

            <Testblock blockName={"Lifecycle demo 1: 挂载 mounting"}>
                <LifecycleC1/>
            </Testblock>
            <Testblock blockName={"Lifecycle demo 2: 更新 updating"}>
                <LifecycleC2/>
            </Testblock>
            <Testblock blockName={"Lifecycle demo 3: 卸载 unmounting"}>
                <LifecycleC3/>
            </Testblock>
            <Testblock blockName={"Full life cycle demo"}>
                <LifeCycleFull/>
            </Testblock>

            <Testblock blockName={"explore function setState()"}>
                <NumCounter2 />
            </Testblock>

            <Testblock blockName={"ref demo1"}>
                <Login/>
            </Testblock>
        </PageLayout>
    );
}

export default App1;
