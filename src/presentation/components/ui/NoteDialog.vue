<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { computed, onMounted, ref } from 'vue';
import { observeDarkModeDialog } from '../../composables/useDarkModeObserver';
import type { Comment } from '../../../types/comment';
import { useNotesStore } from '../../../modules/Notes/application/stores/Notestore';

import { storeToRefs } from 'pinia';
import { useCommentStore } from '../../../modules/comments/application/stores/comment.store';

const notestore = useNotesStore();
const commentstore = useCommentStore();

let id: number = 0;
const noteSelected = computed(() => notestore.noteSelected);
const visible = computed({
    get: () => notestore.noteVisible,
    set: (val: boolean) => notestore.noteVisible = val
});

const { titleHTML, bodyHTML } = storeToRefs(notestore);

const titleEditor = ref<HTMLElement>();
const contentEditor = ref<HTMLElement>();

onMounted(async () => {
    observeDarkModeDialog();
});

const message = ref<string>('');
const comments = computed(() => commentstore.comments);

function createComment() {
    if (message.value.trim() === '') return;
    const comment: Comment = {
        noteID: noteSelected.value?.id ?? 0,
        commentID: id++,
        userID: 1,
        description: message.value
    }
    commentstore.createComment(comment);
    message.value = '';
}

</script>
<template>
    <Dialog class="dialog" v-model:visible="visible" modal header="Note" :style="{ width: '100rem'}"
        :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <div class="container">
            <div class="note card">
                <div class="card-body">
                    <div ref="titleEditor" class="card-title quill-editor" v-html="titleHTML"></div>
                    <div ref="contentEditor" class="card-text quill-editor" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo praesentium beatae rerum dignissimos laborum quo dolor temporibus voluptatem tenetur, totam, soluta error ex. Distinctio repudiandae accusantium quam non, molestiae dolor!
                    Culpa eligendi voluptatum eum beatae praesentium modi officia earum, fugit excepturi labore itaque qui dolor voluptatem quibusdam, sit minus exercitationem totam? Eum ad, adipisci nesciunt fugiat asperiores perspiciatis doloremque voluptatum.
                    Et dolores ea aspernatur nesciunt, odit repellat hic perferendis incidunt voluptatibus, necessitatibus amet nisi mollitia doloremque sequi rem? Nisi debitis nihil quisquam laudantium et id in animi soluta non saepe!
                    Incidunt minima nihil aperiam quia voluptas, eligendi minus quasi at ducimus. Nesciunt suscipit quibusdam voluptatibus necessitatibus reiciendis! Quisquam, non voluptas! Temporibus sed itaque eligendi, quasi natus doloribus cum hic explicabo.
                    Rerum placeat vitae culpa magnam tempore eos dolorum voluptatem aliquam quae similique quisquam, nisi, consequuntur sapiente omnis tenetur voluptatibus labore, iure porro. Placeat voluptatem, vitae tempore maiores deserunt rerum dolor?
                    Cupiditate repellendus tenetur facilis suscipit. Velit ullam soluta, modi, quibusdam, corporis culpa earum nesciunt magnam quas quo sed quia tempora! Voluptate optio et, laborum voluptatibus assumenda reiciendis distinctio obcaecati id.
                    Quibusdam voluptatibus ab esse ea dolor, laudantium sed corporis earum quidem fugit ipsa inventore amet alias, saepe eius, eaque sapiente velit atque doloribus natus. Eos repellat aliquid modi omnis ea.
                    Doloremque ipsa reprehenderit libero, distinctio quasi pariatur praesentium est dolorum obcaecati officia veritatis corrupti laboriosam, dolores rem labore sint accusamus consequuntur laudantium soluta! Dolor eveniet delectus voluptatibus. Recusandae, excepturi vero?
                    Totam qui placeat numquam repudiandae accusamus praesentium optio suscipit. Ea nesciunt explicabo quae rem a laudantium natus ut. Necessitatibus error nemo facilis voluptatibus cupiditate, placeat possimus ex corporis saepe perferendis.
                    Voluptate nulla ea id voluptatibus explicabo earum doloremque ratione cumque molestias in expedita cum omnis ipsa quaerat magnam veritatis obcaecati, adipisci repellat numquam necessitatibus nam. Voluptatibus fuga magnam consequuntur tenetur?
                    Ducimus vitae, culpa illo nulla laboriosam fugit deserunt voluptates enim, saepe ab id harum accusamus consectetur reprehenderit quod debitis maxime repudiandae natus accusantium aut atque, hic ipsum similique placeat! Exercitationem!
                    Placeat cupiditate quisquam accusantium quas alias velit, praesentium nobis labore officiis aut. Nobis id tempora cumque laboriosam, repellendus pariatur vero eos sunt illo magni ad modi aut dignissimos quibusdam quasi!
                    Ullam quaerat tempore vel maiores officiis! Enim quam perferendis libero accusantium assumenda reprehenderit, omnis rerum ut odio corporis vel ipsum nam possimus quod eaque deleniti, exercitationem nobis qui nisi dignissimos.
                    Iste, odio quod voluptate, harum ipsa nemo quasi esse enim eius aliquam repellendus rerum fuga sit adipisci, ab itaque dicta. Minus suscipit autem cumque maxime expedita. Beatae consequuntur unde aspernatur?
                    Molestias provident eligendi accusamus explicabo ipsum necessitatibus nesciunt. Asperiores sunt doloribus eligendi? Harum, perspiciatis repellat? Eaque dolor nam aperiam laudantium dicta. Maiores, officia numquam natus similique porro fugit omnis eius!
                    Officia incidunt in dicta fugit quidem nobis laudantium, cupiditate accusamus. Vitae, fugiat tempore. Possimus iusto perferendis quod recusandae iste praesentium quasi ut accusantium id. Suscipit eum est unde rem odit?
                    Ullam vero deserunt officiis sit voluptatem, sunt porro esse eum veritatis unde officia. Sapiente vitae asperiores nisi nobis rerum aliquam natus adipisci beatae veniam, doloremque voluptas. Fugit natus sapiente libero!
                    Maxime pariatur aut in laboriosam libero porro exercitationem ut architecto ratione dolorum debitis, cumque qui voluptatem nihil dolor culpa numquam nemo quae? Quaerat sunt dolorum incidunt facere est ab esse?
                    Sequi praesentium incidunt exercitationem quia soluta eaque corporis odio, doloribus architecto totam temporibus fugit laboriosam nesciunt minus recusandae explicabo voluptatum omnis consectetur velit mollitia ipsum sunt provident expedita sed. Quod.
                    Reprehenderit porro a ad repellendus iusto sed explicabo aut in autem quas debitis libero iure alias nobis, velit voluptates ipsa, ut dicta molestiae laboriosam dolore quaerat natus! Tempora, incidunt ipsa.
                    Pariatur quasi, dicta aliquid nemo quae obcaecati vitae delectus. Illum facilis perferendis perspiciatis molestias, optio quasi alias libero dolore. Quos nemo iste deserunt eius minus illo tempore facilis repudiandae veniam.
                    Quis, earum esse. Autem quas culpa id fuga rem alias fugiat iure nemo! Tempora architecto nobis libero harum qui dolores numquam ea debitis maxime, eum sit magnam similique sunt ullam.
                    Asperiores tempora minima nostrum possimus amet, nobis pariatur ratione temporibus accusamus autem illum! Iste porro quisquam quidem accusamus totam, quam, odio, provident ipsum molestias tenetur corporis assumenda obcaecati quis soluta?
                    Sit doloribus, similique possimus iusto nesciunt ducimus autem consequatur corporis in numquam magnam officia assumenda saepe quo, tenetur temporibus deserunt quod delectus odit laudantium voluptatem porro earum dolore. Expedita, voluptate.
                    Eum in sint et reprehenderit! Iure non ut tenetur, illo eveniet nesciunt nemo consequuntur sed harum blanditiis voluptatum perferendis mollitia quidem! Cumque quia ad nihil officiis dolorem animi voluptatum tempora!
                    Aperiam, sunt laborum accusantium dolorum maxime quam ducimus fuga quisquam reprehenderit porro, provident nemo id, numquam voluptatum dolore veritatis. Corrupti rerum nihil quidem debitis quis perspiciatis molestias cum hic doloremque?
                    Incidunt laboriosam in distinctio libero magni quis dignissimos quos, temporibus omnis sequi soluta amet iure! Ex expedita nobis suscipit autem nihil odio natus dignissimos quidem, consequatur illo quo doloremque rerum.
                    Libero maxime quae repellat pariatur quod, excepturi perspiciatis voluptatibus autem. Labore omnis placeat fuga illum nemo eveniet est, quibusdam vel culpa laudantium! Culpa ullam dolores eos obcaecati quod nemo ab?
                    Sequi nemo sunt quam eligendi quis nisi sed vitae porro. Illo, ad modi fugiat saepe illum maiores? Quasi aliquam nobis amet dolor, eaque doloribus ipsam error, molestias quis, vitae eveniet.
                    Tempora fugiat necessitatibus officia magnam nemo. Doloribus quis asperiores ea soluta assumenda ad consequuntur aspernatur mollitia maiores reiciendis temporibus esse, sit atque voluptatum, dolorem recusandae facere ipsam odio culpa totam?
                    Excepturi rerum est fugit itaque cum consequuntur aut officia et, nemo culpa deleniti consectetur, autem exercitationem eligendi similique non eos expedita quidem sint soluta nam, magni suscipit nesciunt debitis. Provident?
                    Architecto rerum temporibus facilis animi, quas aliquam perspiciatis iste maiores quasi maxime dolorum vel dolore ea recusandae reiciendis placeat officia quaerat obcaecati necessitatibus accusamus! Aliquam excepturi placeat libero. Quasi, ullam.
                    Culpa tempore corporis vero ex commodi expedita unde officiis nesciunt fugit impedit, hic, soluta quasi molestias minus, fugiat esse maiores ullam cum voluptatibus labore perspiciatis iste rem obcaecati dolor. Dolorum?
                    Minus assumenda, reprehenderit iste autem voluptatibus eligendi labore pariatur odit earum sapiente architecto accusantium quis nulla distinctio, repudiandae quasi debitis officia tempora provident excepturi at veniam, nemo natus dignissimos? Maiores?
                    Ipsam culpa vero nemo cupiditate harum rem voluptate dolores, nisi ut ipsa! Facere ex, eaque laudantium doloremque nostrum in provident! Aliquam dolore sed maxime alias, consequatur necessitatibus! Ad, consectetur culpa?
                    Placeat architecto natus, perspiciatis accusantium eos ipsa aut nisi, harum eius sequi incidunt sit illum nulla eaque. Quod eaque illo cupiditate modi repellat? Exercitationem reprehenderit culpa quas eius? Eligendi, quam.
                    Neque consectetur obcaecati ullam nam quae vero autem fuga excepturi perspiciatis reiciendis eos maxime aliquid assumenda nulla numquam harum quaerat, praesentium repellendus. Laborum nesciunt excepturi itaque incidunt nam mollitia vel!
                    Quod eaque magnam officiis maiores quibusdam ducimus libero vero veniam id accusamus quidem saepe fugiat voluptate, assumenda quos recusandae suscipit esse voluptatibus ab excepturi dolor illo alias facere? Atque, nobis.
                    Tempore ipsa veritatis natus, ducimus illo officia repellendus id voluptatum! Natus nostrum error cumque aspernatur autem numquam tenetur accusantium sequi laudantium assumenda, consequuntur et, doloremque voluptatum illo laboriosam placeat in!
                    Magni illum repudiandae officia praesentium cumque adipisci facilis numquam tempora, reiciendis dolores deserunt beatae sed quaerat quasi minima laboriosam rem saepe voluptatibus assumenda eum ad similique iusto placeat ipsam! Consequuntur.
                    Architecto perspiciatis, pariatur rem necessitatibus at debitis sint eos omnis exercitationem modi, vero dolorum iusto, dolorem repellendus minus dicta! Totam aperiam quis alias! Atque, temporibus. Praesentium deleniti natus iure exercitationem.
                    Tenetur modi quidem aspernatur voluptatem esse. Accusamus, itaque natus magni perferendis quos suscipit! Perferendis dolores et nobis, culpa dolorem, similique magnam quo quis animi fugit odio voluptatibus. Vero, illum blanditiis.
                    Odit enim a vel, et voluptates cupiditate eligendi delectus id. Tenetur, possimus veritatis mollitia voluptatum maiores ea praesentium, voluptatibus saepe cupiditate fugiat neque laborum eos libero molestiae repellendus pariatur id.
                    Atque nostrum deleniti culpa ipsam, molestiae omnis enim architecto sit quia nulla quis quasi, hic nemo, totam illum! Ipsam doloremque rem dicta eos consequatur voluptates sapiente minima voluptatum commodi sit!
                    Deserunt necessitatibus est, tenetur alias facilis quas harum. Atque voluptates ex iure, culpa ad fugit alias quo tempora autem. Quod libero tenetur similique pariatur laborum doloremque velit incidunt quis minima!
                    Expedita nesciunt maxime adipisci totam ipsum suscipit sint ipsam qui debitis nam harum, laudantium minus. Suscipit sapiente modi ab voluptatum adipisci similique ipsa, vero culpa quisquam ratione distinctio ipsam aperiam?
                    Placeat laboriosam et maxime! Alias inventore at sed quos voluptatem non laudantium doloribus, doloremque aspernatur, placeat autem, incidunt nemo facilis error vero tempore iure reprehenderit tenetur voluptate odio voluptatibus aut!
                    Vero similique nostrum fugit amet sit sed odit minus, ipsum cumque voluptatibus maiores voluptas porro. Nisi numquam odio praesentium reprehenderit rem velit harum, in error officia recusandae quisquam, necessitatibus inventore.
                    Libero quod, officiis quasi hic reiciendis rerum eveniet ipsum iste accusamus voluptatum doloribus impedit quis ullam odio nobis tempore placeat? Nulla iure corrupti quo veritatis voluptas. Provident voluptatem suscipit id.
                    Doloremque vel, deleniti eligendi illo natus quasi quibusdam veritatis velit labore, nobis ipsam id cum maiores laudantium qui numquam! Repellat vitae magni architecto odio omnis? Pariatur cupiditate nulla eaque suscipit.</div>
                </div>
            </div>
            <div class="comments card">
                <div class="headerComments">
                    <h4>Comments</h4>
                </div>
                <div class="containerCommentBox">
                    <div class="commentBox" v-for="comment in comments" :key="comment.commentID">
                        <div class="userBox">{{ comment.userID}}</div>
                        <div class="commentUser">{{comment.description }}</div>
                    </div>
                </div>
                <div class="commentInputContainer">
                    <div class="messageBox">
                        <textarea placeholder="type a comment" type="text" id="messageInput" v-model="message" />
                        <button id="sendButton" @click="createComment()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                                <path fill="none"
                                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888">
                                </path>
                                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="33.67"
                                    stroke="#6c6c6c"
                                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Dialog>
</template>
<style scoped src="/src/assets/Styles/Components/NoteDialog.css"></style>
<style> 

@media screen and (max-width: 1100px) {
   .p-dialog-mask.p-overlay-mask.p-overlay-mask-enter{
        overflow: hidden;
   }

   .p-dialog-content{
        overflow: hidden !important;
        width: 100%;
        height: 100%;
   }
}  
</style>