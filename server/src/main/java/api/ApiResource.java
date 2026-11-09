package api;

import business.ApplicationContext;
import business.category.Category;
import business.category.CategoryDao;
import business.book.Book;
import business.book.BookDao;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;

import java.util.List;

@ApplicationPath("/")
@Path("/")
public class ApiResource {

    private final BookDao bookDao = ApplicationContext.INSTANCE.getBookDao();
    private final CategoryDao categoryDao = ApplicationContext.INSTANCE.getCategoryDao();

    @GET
    @Path("categories")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Category> categories(@Context HttpServletRequest httpRequest) {
        try {
            return categoryDao.findAll();
        } catch (Exception e) {
            throw new ApiException("categories lookup failed", e);
        }
    }

    @GET
    @Path("categories/{category-id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Category category(@PathParam("category-id") long categoryId) {
        try {
            return categoryDao.findByCategoryId(categoryId);
        } catch (Exception e) {
            throw new ApiException("category lookup failed", e);
        }
    }

    @GET
    @Path("books/{book-id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book book(@PathParam("book-id") long bookId) {
        try {
            return bookDao.findByBookId(bookId);
        } catch (Exception e) {
            throw new ApiException("book lookup failed", e);
        }
    }

    @GET
    @Path("categories/{category-id}/books")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> booksByCategoryId(@PathParam("category-id") long categoryId) {
        try {
            return bookDao.findByCategoryId(categoryId);
        } catch (Exception e) {
            throw new ApiException("category lookup failed", e);
        }
    }

    @GET
    @Path("categories/{category-id}/suggested-books")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> suggestedBooksByCategoryId(@PathParam("category-id") long categoryId, @QueryParam("limit") Integer limit) {
        int bookCount = (limit != null) ? limit : 3;
        try {
            return bookDao.findRandomByCategoryId(categoryId, bookCount);
        } catch (Exception e) {
            throw new ApiException("category lookup failed", e);
        }
    }

    @GET
    @Path("categories/name/{category-name}")
    @Produces(MediaType.APPLICATION_JSON)
    public Category categoryByName(@PathParam("category-name") String categoryName) {
        try {
            return categoryDao.findByName(categoryName);
        } catch (Exception e) {
            throw new ApiException("categories lookup failed", e);
        }
    }

    @GET
    @Path("categories/name/{category-name}/books")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> booksByCategoryName(@PathParam("category-name") String categoryName) {
        try {
            return bookDao.findByCategoryName(categoryName);
        } catch (Exception e) {
            throw new ApiException("category lookup failed", e);
        }
    }

    @GET
    @Path("categories/name/{category-name}/suggested-books")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> suggestedBooksByCategoryName(@PathParam("category-name") String categoryName, @QueryParam("limit") Integer limit) {
        int bookCount = (limit != null) ? limit : 3;
        try {
            return bookDao.findRandomByCategoryName(categoryName, bookCount);
        } catch (Exception e) {
            throw new ApiException("category lookup failed", e);
        }
    }
}
