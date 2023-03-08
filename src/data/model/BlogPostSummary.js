export default class BlogPostSummary {
  constructor({ id, title, author, email, icon, tags, createdAt, EditedAt }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.email = email;
    this.icon = icon;
    this.tags = tags;
    this.createdAt = createdAt;
    this.EditedAt = EditedAt;
  }

  static fromRawData(rawData) {
    return new BlogPostSummary({
      id: rawData.id,
      title: rawData.properties.제목.title.text.content,
      author: rawData.properties.작성자.created_by.name,
      email: rawData.properties.작성자.created_by.person.email,
      icon: rawData.icon.emoji,
      tags: rawData.properties.태그.multi_select.map((tag) => tag.name),
      createdAt: new Date(rawData.created_time),
      EditedAt: new Date(rawData.last_edited_time),
    });
  }
}
