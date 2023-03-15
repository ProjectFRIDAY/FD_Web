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

  toSerializableObject() {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      email: this.email,
      icon: this.icon,
      tags: this.tags,
      createdAt: dateToText(this.createdAt),
      EditedAt: dateToText(this.EditedAt),
    };
  }

  static fromRawData(rawData) {
    return new BlogPostSummary({
      id: rawData.id,
      title: rawData.properties.제목.title[0]?.text?.content ?? '', // 제목이 없는 경우 처리
      author: rawData.properties.작성자.created_by.name,
      email: rawData.properties.작성자.created_by.person.email,
      icon: rawData.icon?.emoji ?? '', // 아이콘이 없는 경우 처리
      tags: rawData.properties.태그?.multi_select?.map((tag) => tag.name) ?? [], // 태그가 없는 경우 처리
      createdAt: new Date(rawData.created_time),
      EditedAt: new Date(rawData.last_edited_time),
    });
  }
}

function dateToText(date) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}