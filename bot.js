require('dotenv').config();
const { Client, GatewayIntentBits, ActivityType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
] });


const ROLES = [
    {
        saddleBrown: '909076867510833171',
        steelBlue: '909076392279416902',
        forestGreen: '909076268773945415',
        orangeRed: '909075636688138291',
        tomato: '909075463215939584',
        crimson: '909075190577786892',
        seaGreen: '909074038935150602',
        purple: '909072433045196841',
        hotPink: '860204362940153857',
        fuchSia: '860204189245636628',
        blue: '860203947720572969',
        aqua: '860203781692981278',
        lime: '860203414952869938',
        yellow: '860203322702168084',
        red: '860202589304258572',
        black: '860202259345965066'
    },

    {
        heHim: '856142211828809739',
        sheHer: '856142366825513000',
        theyThem: '856142415395815424',
        others: '856142466418737155'
    },

    {
        young: '856139209533030430',
        old: '856139403800739841'
    },

    {
        books: '850248598289121341',
        anime: '850248713536405544',
        games: '856144859915878410',
        movies: '850248825595756597',
        sports: '1071787443864485928'
    }
]


client.on('ready',()=>{
    client.user.setStatus('idle');
    client.user.setActivity('Peregrin Took',{type: ActivityType.Watching});
    client.user.setUsername('Gandalf the Bot');

    const rolesChannel = client.channels.cache.get('991178317698969600');
    // if(rolesChannel!=null){
        //rolesChannel.send('***Wise words I shall impart to thee, oh members of this Discord server. The roles that thou may take upon thyself are not mere titles, but reflections of thy character and purpose within this community. Let not haste guide thy choices, but let thy heart and mind be the compass that steer thee towards the role that best suits thee. For as thou grow in thy role, so shall this fellowship grow stronger, and the bonds of unity shall endure. For each role bears its own responsibilities and privileges. Choose wisely, for the path you take will shape the journey ahead. May your decisions bring harmony to this fellowship, and may your voice ring true in the halls of this virtual realm.***')
        // rolesChannel.send({
        //     content: '**Color Role**',
        //     components: [
        //                     new ActionRowBuilder().addComponents(
        //                         new ButtonBuilder()
        //                             .setCustomId('color-saddle-brown')
        //                             .setLabel('Saddle Brown')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-steel-blue')
        //                             .setLabel('Steel Blue')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-forest-green')
        //                             .setLabel('Forest Green')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-orange-red')
        //                             .setLabel('Orange Red')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-tomato')
        //                             .setLabel('Tomato')
        //                             .setStyle(ButtonStyle.Primary)
        //                     ),

        //                     new ActionRowBuilder().addComponents(
        //                         new ButtonBuilder()
        //                             .setCustomId('color-crimson')
        //                             .setLabel('Crimson')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-sea-green')
        //                             .setLabel('Sea Green')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-purple')
        //                             .setLabel('Purple')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-pink')
        //                             .setLabel('Fuchusia')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-blue')
        //                             .setLabel('Blue')
        //                             .setStyle(ButtonStyle.Primary)
        //                     ),
                            
        //                     new ActionRowBuilder().addComponents(
        //                         new ButtonBuilder()
        //                             .setCustomId('color-aqua')
        //                             .setLabel('Aqua')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-lime')
        //                             .setLabel('Lime')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-yellow')
        //                             .setLabel('Yellow')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-red')
        //                             .setLabel('Red')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('color-black')
        //                             .setLabel('Black')
        //                             .setStyle(ButtonStyle.Primary)
        //                     ),
        //                 ]
        // });

        // rolesChannel.send({
        //     content: '**Pronouns Role**',
        //     components: [
        //                     new ActionRowBuilder().addComponents(
        //                         new ButtonBuilder()
        //                             .setCustomId('gender-man')
        //                             .setLabel('He/Him')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('gender-woman')
        //                             .setLabel('She/Her')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('gender-others')
        //                             .setLabel('They/Them')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('gender-ask')
        //                             .setLabel('Ask Pronouns')
        //                             .setStyle(ButtonStyle.Primary),
        //                     )
        //                 ]
        // });

        // rolesChannel.send({
        //     content: '**Interests Role**',
        //     components: [
        //                     new ActionRowBuilder().addComponents(
        //                         new ButtonBuilder()
        //                             .setCustomId('interests-books')
        //                             .setLabel('Books/Novels')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('interests-anime')
        //                             .setLabel('Anime/Manga')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('interests-games')
        //                             .setLabel('Games')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('interests-movie')
        //                             .setLabel('Movie/TV series')
        //                             .setStyle(ButtonStyle.Primary),

        //                         new ButtonBuilder()
        //                             .setCustomId('interests-sports')
        //                             .setLabel('Sports')
        //                             .setStyle(ButtonStyle.Primary)
        //                     )
        //                 ]
        // });

        rolesChannel.send({
            content: '**Age Role**',
            components: [
                            new ActionRowBuilder().addComponents(
                                new ButtonBuilder()
                                    .setCustomId('age-young')
                                    .setLabel('18-')
                                    .setStyle(ButtonStyle.Primary),

                                new ButtonBuilder()
                                    .setCustomId('age-old')
                                    .setLabel('18+')
                                    .setStyle(ButtonStyle.Primary),
                            )
                        ]
        });
    // }

    console.log("Bot logged in");
});


client.on('interactionCreate',(interaction)=>{
    if(interaction.isButton()){
        
        const thisGuild = interaction.guild;
        const thisMember = interaction.member;
        var colorRoles = ROLES[0];
        var genderRoles = ROLES[1];
        var ageRoles = ROLES[2];
        var interestRoles = ROLES[3];
        //check existing color roles and remove it IF color role is selected
        if(interaction.customId.substring(0,5) == 'color'){
            

            for(var colorRole in colorRoles){
                if(thisMember.roles.cache.has(colorRoles[colorRole])){
                    thisMember.roles.remove(colorRoles[colorRole]);
                }
            }
        }
           
        
        //check existing gender roles and remove it IF gender role is selected
        if(interaction.customId.substring(0,6) == 'gender'){
            for(var genderRole in genderRoles){
                if(thisMember.roles.cache.has(genderRoles[genderRole])){
                    thisMember.roles.remove(genderRoles[genderRole]);
                }
            }
        }
        

        //check existing age roles and remove it IF age role is selected
        if(interaction.customId.substring(0,3) == 'age'){
            for(var ageRole in ageRoles){
                if(thisMember.roles.cache.has(ageRoles[ageRole])){
                    thisMember.roles.remove(ageRoles[ageRole]);
                }
            }
        }
        

        
        
        switch(interaction.customId){
            //colors
            case 'color-saddle-brown':
                interaction.member.roles.add(ROLES[0].saddleBrown)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-steel-blue':
                interaction.member.roles.add(ROLES[0].steelBlue)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-forest-green':
                interaction.member.roles.add(ROLES[0].forestGreen)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-orange-red':
                interaction.member.roles.add(ROLES[0].orangeRed)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-tomato':
                interaction.member.roles.add(ROLES[0].tomato)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-crimson':
                interaction.member.roles.add(ROLES[0].crimson)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-sea-green':
                interaction.member.roles.add(ROLES[0].seaGreen)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-purple':
                interaction.member.roles.add(ROLES[0].purple)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-aqua':
                interaction.member.roles.add(ROLES[0].aqua)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;
                
            case 'color-lime':
                interaction.member.roles.add(ROLES[0].lime)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-yellow':
                interaction.member.roles.add(ROLES[0].yellow)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-red':
                interaction.member.roles.add(ROLES[0].red)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'color-black':
                interaction.member.roles.add(ROLES[0].black)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            //gender
            case 'gender-man':
                interaction.member.roles.add(ROLES[1].heHim)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'gender-woman':
                interaction.member.roles.add(ROLES[1].sheHer)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'gender-others':
                interaction.member.roles.add(ROLES[1].theyThem)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'gander-ask':
                interaction.member.roles.add(ROLES[1].others)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            //interest 
            case 'interests-books':
                interaction.member.roles.add(ROLES[3].books)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'interests-anime':
                interaction.member.roles.add(ROLES[3].anime)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;
            
            case 'interests-games':
                interaction.member.roles.add(ROLES[3].games)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;
            
            case 'interests-movie':
                interaction.member.roles.add(ROLES[3].movies)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            case 'interests-sports':
                interaction.member.roles.add(ROLES[3].sports)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;

            //age
            case 'age-young':
                interaction.member.roles.add(ROLES[2].young)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;
            
            case 'age-old':
                interaction.member.roles.add(ROLES[2].old)
                .then(()=>{interaction.reply({content: `The role was added to you`, ephemeral: true})});
                break;
                

        }
    }
})

client.login(process.env.bot_token);