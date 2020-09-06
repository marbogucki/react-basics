import React, { Component } from "react";
import "./Articles.scss";
import { connect } from "react-redux";
import { fetchArticles } from "./store/actions";
import { getArticles, getLoading, getError } from "./store/selectors";
import Section from "../../components/Section/Section";
import Heading from "../../components/Heading/Heading";
import Loading from "../../components/Loading/Loading";
import ArticleItem from "./ArticleItem/ArticleItem";
import ErrorList from "../../components/ErrorList/ErrorList";

class Articles extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { loading, error, articles } = this.props;

    return (
      <Section className="article-page">
        <Heading title="Articles" />
        {loading ? (
          <Loading />
        ) : (
          (error && <ErrorList message={error} />) ||
          articles.map(({ id, ...article }) => (
            <ArticleItem key={id} article={article} />
          ))
        )}
      </Section>
    );
  }
}

const mapStateToProps = ({ articlesState }) => ({
  articles: getArticles(articlesState),
  loading: getLoading(articlesState),
  error: getError(articlesState),
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
