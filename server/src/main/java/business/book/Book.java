package business.book;

public record Book(long bookId, String title, String author, int price, boolean isPublic, long categoryId,
                   String description, int rating, boolean isFeatured) {
}
