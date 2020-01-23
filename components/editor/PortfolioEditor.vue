<template>
  <div class="editor course-editor">
    <portfolio-menu :editor="editor"/>
    <editor-content
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
import { Editor, EditorContent } from 'tiptap'
import PortfolioMenu from '~/components/editor/PortfolioMenu'
import {
  Bold,
  Italic,
  History,
  OrderedList,
  BulletList,
  ListItem,
  Image
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent, PortfolioMenu
  },
  props: {
    initialContent: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      editor: null
    }
  },
  // This is called only on client (in browser)
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Bold(),
        new Italic(),
        new History(),
        new OrderedList(),
        new BulletList(),
        new ListItem(),
        new Image()
      ],
      onUpdate: () => {
          this.emitUpdate()
      }
    })
    this.initialContent && this.editor.setContent(this.initialContent)
  },
  beforeDestroy() {
    this.editor && this.editor.destroy()
  },
  methods: {
      emitUpdate() {
          const content = this.editor.getHTML()
          this.$emit('editorUpdated', content)
      }
  }
}
</script>

<style lang="scss">
  .course-editor {
    * {
      &:focus {
        outline: none;
      }
    }
    border: 1px solid gray;
    .editor__content {
      padding: 0 20px 20px 20px;
    }
  }
</style>