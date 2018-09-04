<template>
    <div class="footer-tab-molecule" v-bind:class="{selected: selected}">
        <BadgeAtom v-if="alerts" v-bind:label="alerts" />
        <ToDoIcon v-if="type==='todo'"/>
        <WeatherIcon v-if="type==='weather'"/>
        <span>{{label}}</span>
    </div>
</template>
<script>
    import ToDoIcon from '../../assets/icons/th-list-solid.svg';
    import WeatherIcon from '../../assets/icons/sun-solid.svg';
    import BadgeAtom from '../atoms/BadgeAtom.vue';

    export default {
        name: 'FooterTabMolecule',
        props:{
            label: String,
            type: String,
            alerts: String,
            selected: Boolean
        },
        components:{
            ToDoIcon,
            WeatherIcon,
            BadgeAtom
        }
    }
</script>
<style scoped>
    div.footer-tab-molecule{
        flex-grow: 1;
        flex-basis: 0;
        padding: 10px;
        text-align: center;
        position: relative;      
    }

    div.footer-tab-molecule.selected{
        background:gray;
    }  

    div.footer-tab-molecule > span:not(.badge-atom){
        color: white;
        font-weight: 900;
        font-size: 12px;
    }

    div.footer-tab-molecule > span.badge-atom{
        position: absolute;
        right: 50%;
        margin-right: -40px;
    }

    div.footer-tab-molecule > svg{
        color: white;
        display: block;
        height: 24px;
        width: 24px;
        margin: 0px auto;
        padding-bottom: 10px;
    }
</style>